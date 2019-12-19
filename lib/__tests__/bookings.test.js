const Bookings = require('../bookings');

const rqResult = { result: 'result' };
const rqWithAuth = jest.fn(async () => rqResult);
const bookings = Bookings(rqWithAuth);

test('lists', async () => {
  const res = await bookings.list();

  expect(res).toEqual(rqResult);
  expect(rqWithAuth).toBeCalledWith(
    { method: 'GET', route: 'booking' },
  );
});
