const rq = require('./api/request');
const Bookings = require('./bookings');
const Items = require('./items');

function Checkfront({ endpoint, key, secret }) {
  async function rqWithAuth(params) {
    return rq({
      endpoint,
      key,
      secret,
      ...params,
    });
  }

  return {
    bookings: Bookings(rqWithAuth),
    items: Items(rqWithAuth),
  };
}

module.exports = Checkfront;
