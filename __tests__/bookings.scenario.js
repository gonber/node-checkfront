const checkfront = require('./config');

jest.unmock('request-promise-native');

test('lists bookings', async () => {
  const bookings = await checkfront.bookings.list();
  expect(bookings).toHaveLength(1);
});

test('lists bookings with params', async () => {
  const params = { status_id: 'notAStatusId' };
  const bookings = await checkfront.bookings.list(params);
  expect(bookings).toHaveLength(0);
});

test.skip('lists bookings with date params', async () => {
  const [{ created_date: createdDate }] = await checkfront.bookings.list();
  const paramsAt = { created_date: createdDate };
  const paramsBefore = {
    created_date: {
      date: createdDate + 60,
      relative: 'before',
    },
  };
  const paramsAfter = {
    created_date: {
      date: createdDate + 60,
      relative: 'after',
    },
  };
  expect(await checkfront.bookings.list(paramsAt)).toHaveLength(1);
  expect(await checkfront.bookings.list(paramsBefore)).toHaveLength(1);
  expect(await checkfront.bookings.list(paramsAfter)).toHaveLength(0);
});

test('retrieves booking', async () => {
  const booking = await checkfront.bookings.retrieve(1);
  expect(booking.booking_id).toEqual(1);
});
