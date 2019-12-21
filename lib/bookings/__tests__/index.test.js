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

test('lists without parameters', async () => {
  rqResult = {
    'booking/index': {
      1: { booking: 1 },
      2: { booking: 2 },
    },
  };
  const res = await bookings.list();

  expect(res).toEqual([{ booking: 1 }, { booking: 2 }]);
  expect(rqWithAuth).toBeCalledWith(
    { method: 'GET', route: 'booking', qs: {} },
  );
});

test('lists with fixed date parameter', async () => {
  rqResult = {
    'booking/index': {
      1: { booking: 1 },
      2: { booking: 2 },
    },
  };
  const params = {
    start_date: Date.now(),
  };
  const res = await bookings.list(params);

  expect(res).toEqual([{ booking: 1 }, { booking: 2 }]);
  expect(rqWithAuth).toBeCalledWith(
    { method: 'GET', route: 'booking', qs: params },
  );
});

test('lists with relative date parameter before', async () => {
  rqResult = {
    'booking/index': {
      1: { booking: 1 },
      2: { booking: 2 },
    },
  };
  const params = {
    start_date: {
      date: Date.now(),
      relative: 'before',
    },
  };
  const res = await bookings.list(params);

  expect(res).toEqual([{ booking: 1 }, { booking: 2 }]);
  expect(rqWithAuth).toBeCalledWith(
    { method: 'GET', route: 'booking', qs: { start_date: `<${params.start_date.date}` } },
  );
});

test('lists with relative date parameter after', async () => {
  rqResult = {
    'booking/index': {
      1: { booking: 1 },
      2: { booking: 2 },
    },
  };
  const params = {
    start_date: {
      date: Date.now(),
      relative: 'after',
    },
  };
  const res = await bookings.list(params);

  expect(res).toEqual([{ booking: 1 }, { booking: 2 }]);
  expect(rqWithAuth).toBeCalledWith(
    { method: 'GET', route: 'booking', qs: { start_date: `>${params.start_date.date}` } },
  );
});

test('retrieves', async () => {
  rqResult = { booking: { book: 'ing' } };
  const bookingId = 'id';
  const res = await bookings.retrieve(bookingId);

  expect(res).toEqual({ book: 'ing' });
  expect(rqWithAuth).toBeCalledWith(
    { method: 'GET', route: 'booking/id' },
  );
});
