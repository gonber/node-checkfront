const Ajv = require('ajv');
const getBooking = require('./getBooking');

function getAjvValidator(schema) {
  const ajv = new Ajv();
  const validator = ajv.compile(schema);
  return { ajv, validator };
}

const ajvValidators = {
  list: getAjvValidator(getBooking),
};

function validate(schema, data) {
  const { ajv, validator } = ajvValidators[schema];
  const valid = validator(data);
  if (valid) {
    return;
  }
  throw new Error(ajv.errorsText(validator.errors));
}

module.exports = validate;
