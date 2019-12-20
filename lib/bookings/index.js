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

  async function retrieve(bookingId) {
    const res = await rqWithAuth({
      method: 'GET',
      route: `booking/${bookingId}`,
    });

    return res.booking;
  }

  return {
    list,
    retrieve,
  };
}

module.exports = Bookings;
