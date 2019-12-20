const validate = require('./schema');

function Bookings(rqWithAuth) {
  async function list(params = {}) {
    validate('list', params);

    const res = await rqWithAuth({
      method: 'GET',
      route: 'booking',
      qs: params,
    });

    return Object.values(res['booking/index']);
  }

  return {
    list,
  };
}

module.exports = Bookings;
