const Query = {
  dogs(parent, args, ctx, info) {
    return [{ name: 'Charlie' }, { name: 'Sunny' }];
  }
};

module.exports = Query;
