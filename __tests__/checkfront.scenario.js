require('dotenv').config();
const Checkfront = require('..');

jest.unmock('request-promise-native');

const {
  CHECKFRONT_ENDPOINT: endpoint,
  CHECKFRONT_KEY: key,
  CHECKFRONT_SECRET: secret,
} = process.env;

const config = {
  endpoint,
  key,
  secret,
};

const checkfront = Checkfront(config);

test('lists bookings', async () => {
  const bookings = await checkfront.bookings.list();
  expect(bookings).toHaveLength(1);
});

test('lists bookings with params', async () => {
  const params = { status_id: 'notAStatusId' };
  const bookings = await checkfront.bookings.list(params);
  expect(bookings).toHaveLength(0);
});
