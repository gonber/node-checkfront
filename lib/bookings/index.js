const validate = require('./schema');

function parseDate(params, key) {
  if (params[key] && params[key].relative) {
    return params[key].relative === 'before'
      ? `<${params[key].date}`
      : `>${params[key].date}`;
  }
  return params[key];
}

function Bookings(rq) {
  async function list(params = {}) {
    validate('list', params);

    const parsedDates = [
      'start_date', 'end_date', 'created_date', 'last_modified',
    ].reduce((p, k) => {
      p[k] = parseDate(params, k); // eslint-disable-line no-param-reassign
      return p;
    }, {});
    const qs = { ...params, ...parsedDates };
    const res = await rq({
      method: 'GET',
      route: 'booking',
      qs,
    });

    return Object.values(res['booking/index']);
  }

  async function retrieve(bookingId) {
    const res = await rq({
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
