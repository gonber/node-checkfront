const Bookings = require('../');

let rqResult = { result: 'result' };
const rqWithAuth = jest.fn(async () => rqResult);
const bookings = Bookings(rqWithAuth);

test('lists', async () => {
  rqResult = {
    'booking/index': {
      1: { booking: 1 },
      2: { booking: 2 },
    },
  };
  const params = { status_id: 'status_id' };
  const res = await bookings.list(params);

  expect(res).toEqual([{ booking: 1 }, { booking: 2 }]);
  expect(rqWithAuth).toBeCalledWith(
    { method: 'GET', route: 'booking', qs: params },
  );
});
