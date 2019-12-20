const date = {
  oneOf: [
    {
      type: 'number',
      minimum: 0,
    },
    {
      type: 'string',
      format: 'date-time',
    },
  ],
};

const schema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    status_id: {
      type: 'string',
      description: 'The current status of a booking.',
    },
    customer_id: {
      type: 'number',
      description: 'The customer id associated with the booking.',
    },
    customer_email: {
      type: 'string',
      description: 'The customer email associated with the booking.',
    },
    start_date: {
      ...date,
      description: 'The date the booking starts on (i.e. check-in).',
    },
    end_date: {
      ...date,
      description: 'The date the booking ends on (i.e. check-out).',
    },
    created_date: {
      ...date,
      description: 'The date the booking was created.',
    },
    last_modified: {
      ...date,
      description: 'The date the booking was last changed. Useful for getting bookings added or changed since your last call.',
    },
    limit: {
      type: 'number',
      description: 'The limit of bookings to return per page (default: 100).',
    },
    page: {
      type: 'number',
      description: 'The page of results to return.',
    },
  },
};

module.exports = schema;
