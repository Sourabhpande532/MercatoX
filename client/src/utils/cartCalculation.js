const cartCalculation = (cart = []) => {
  return cart.reduce(
    (acc, curr) => {
      acc.totalQty += curr.qty;
      acc.cartItem = cart.length;
      acc.totalMrp += curr.product.price * curr.qty;
      acc.totalSaved +=
        (curr.product.price * curr.product.discount * curr.qty) / 100;
      acc.deliveryCharge += curr.product.deliveryCharge;
      acc.finalAmount = acc.totalMrp - acc.totalSaved;
      return acc;
    },
    {
      totalQty: 0,
      cartItem: 0,
      totalMrp: 0,
      totalSaved: 0,
      deliveryCharge: 0,
      finalAmount: 0,
    },
  );
};
export { cartCalculation };
