const checkfront = require('./config');

jest.unmock('request-promise-native');

test('lists items', async () => {
  const items = await checkfront.items.list();
  expect(items).toHaveLength(1);
});

test('retrieves item', async () => {
  const item = await checkfront.items.retrieve(1);
  expect(item.item_id).toEqual(1);
});
