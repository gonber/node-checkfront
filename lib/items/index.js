function Items(rq) {
  async function list() {
    const res = await rq({
      method: 'GET',
      route: 'item',
    });

    return Object.values(res.items);
  }

  async function retrieve(itemId) {
    const res = await rq({
      method: 'GET',
      route: `item/${itemId}`,
    });

    return res.item;
  }

  return {
    list,
    retrieve,
  };
}

module.exports = Items;
