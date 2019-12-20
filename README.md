## Checkfront

This project is an open source node module for the [Checkfront API](http://api.checkfront.com/)

### Installation

```BASH
npm install -g checkfront
npm install --save checkfront
```

### Getting Started

In order to call the Checkfront API, you will need to be setup with:
* endpoint
* key
* secret

```JavaScript
const checkfront = require('checkfront')({
    endpoint,
    key,
    secret,
});
```

### Methods

#### checkfront.bookings.list()

[Documentation](http://api.checkfront.com/ref/booking.html#booking)

Retrieve a listing of bookings in the system.

```JavaScript
const bookings = await checkfront.bookings.list({
    status_id: '',
});
```

#### checkfront.bookings.retrieve()

[Documentation](http://api.checkfront.com/ref/booking/booking.html#booking-booking-id)

Retrieve extended information on a specific booking.

```JavaScript
const booking = await checkfront.bookings.retrieve(bookingId);
```

### Contribution Guidelines

Fork the respository and install all the dependencies:

```BASH
yarn install
```

Run the setup script in the project root directory:

```BASH
yarn setup
```

Make sure to run the unit tests and linting before committing. Obviously, add to the tests as you make changes:

```BASH
yarn test
```

For watch:

```BASH
yarn testing
```

You can also run the scenario tests against the live API:

```BASH
yarn test-scenario
```
