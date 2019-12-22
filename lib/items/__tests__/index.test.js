const Items = require('../');

let rqResult = { result: 'result' };
const rq = jest.fn(async () => rqResult);
const bookings = Items(rq);

test('lists', async () => {
  rqResult = {
    items: {
      1: { item: 1 },
      2: { item: 2 },
    },
  };
  const res = await bookings.list();

  expect(res).toEqual([{ item: 1 }, { item: 2 }]);
  expect(rq).toBeCalledWith(
    { method: 'GET', route: 'item' },
  );
});

test('retrieves', async () => {
  rqResult = { item: { it: 'em' } };
  const bookingId = 'id';
  const res = await bookings.retrieve(bookingId);

  expect(res).toEqual({ it: 'em' });
  expect(rq).toBeCalledWith(
    { method: 'GET', route: 'item/id' },
  );
});
