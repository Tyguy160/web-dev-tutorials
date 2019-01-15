const { forwardTo } = require('prisma-binding');

const Query = {
  // This forwards API call straight to the DB
  // instead of creating custom resolver shown below
  items: forwardTo('db'),
  item: forwardTo('db'),
  //   async items(parent, args, context, info) {
  //     const items = await context.db.query.items();
  //     return items;
  //   },
};

module.exports = Query;
