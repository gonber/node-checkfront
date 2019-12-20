const request = require('request-promise-native');

async function checkfrontRequest({
  route,
  endpoint,
  key: user,
  secret: pass,
  ...params
}) {
  const uri = `${endpoint}${route}`;
  const response = await request({
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
