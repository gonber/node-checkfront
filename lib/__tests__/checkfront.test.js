const Bookings = require('../bookings');
const rq = require('../api/request');
const Checkfront = require('../checkfront');

jest.mock('../bookings');
jest.mock('../api/request');

const endpoint = 'endpoint';
const key = 'key';
const secret = 'secret';

test('constructs', () => {
  const checkfront = Checkfront({ endpoint, key, secret });
  expect(checkfront).toContainAllKeys([
    'bookings',
    'items',
  ]);
});

test('builds request with auth function', async () => {
  Checkfront({ endpoint, key, secret });
  const rqWithAuth = Bookings.mock.calls[0][0];
  const params = { params: 'params' };
  await rqWithAuth(params);

  expect(rq).toBeCalledWith({
    endpoint, key, secret, ...params,
  });
});
