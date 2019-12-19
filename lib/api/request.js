const request = require('request-promise-native');

async function checkfrontRequest({
  method,
  route,
  endpoint,
  key: user,
  secret: pass,
  ...params
}) {
  const uri = `${endpoint}${route}`;
  const response = await request({
    method,
    uri,
    auth: {
      user,
      pass,
    },
    json: true,
    ...params,
  });
  return response;
}

module.exports = checkfrontRequest;
