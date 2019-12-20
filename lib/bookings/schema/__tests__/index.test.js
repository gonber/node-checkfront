const validate = require('..');

test('validates empty get booking', () => {
  const data = {};
  validate('list', data);
});

test('validates get booking', () => {
  const data = {
    status_id: 'active',
    start_date: 1,
    end_date: (new Date()).toISOString(),
  };
  validate('list', data);
});

test('validate throws on invalid get booking', () => {
  const data = {
    status_id: 'active',
    start_date: 'not a date',
    end_date: (new Date()).toISOString(),
  };
  expect(() => validate('list', data)).toThrow();
});
