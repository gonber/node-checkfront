const request = require('request-promise-native');
const rq = require('../request');

const route = 'route';
const endpoint = 'endpoint';
const key = 'key';
const user = key;
const secret = 'secret';
const pass = secret;

test('requests and returns result', async () => {
  const booking = { booking: 'booking' };
  request.mockResolvedValueOnce(booking);
  const res = await rq({
    route, endpoint, key, secret,
  });

  expect(res).toEqual(booking);
  expect(request).toBeCalledWith({
    uri: `${endpoint}${route}`,
    auth: { user, pass },
    json: true,
  });
});

test('requests with extra parameters', async () => {
  const params = { param1: 'param1', param2: 'param2' };
  await rq({
    route, endpoint, key, secret, ...params,
  });

  expect(request).toBeCalledWith({
    uri: `${endpoint}${route}`,
    auth: { user, pass },
    json: true,
    ...params,
  });
});
