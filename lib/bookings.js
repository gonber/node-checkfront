function Bookings(rqWithAuthFn) {
  async function list() {
    return rqWithAuthFn({
      method: 'GET',
      route: 'booking',
    });
  }

  return {
    list,
  };
}

module.exports = Bookings;
