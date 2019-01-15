const Mutations = {
  async createItem(parent, args, context, info) {
    // TODO: Check if they are logged in

    const item = await context.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },

  async updateItem(parent, args, context, info) {
    const updates = { ...args };
    delete updates.id;
    console.log(args);
    const item = await context.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
    return item;
  },

  async deleteItem(parent, args, context, info) {
    const where = { id: args.id };

    const item = await context.db.query.item({ where }, `{id, title}`);

    return context.db.mutation.deleteItem({ where }, info);
  },
};

module.exports = Mutations;
