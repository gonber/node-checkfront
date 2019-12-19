const rq = require('./api/request');
const Bookings = require('./bookings');

function Checkfront({ endpoint, key, secret }) {
  async function rqWithAuth(params) {
    return rq({
      ...params,
      endpoint,
      key,
      secret,
    });
  }

  return {
    bookings: Bookings(rqWithAuth),
  };
}

module.exports = Checkfront;
