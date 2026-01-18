import { useMemo } from "react";
import { CartPriceDetails } from "../component/mycart/CartPriceDetails";
import { useCart } from "../context/CartContext";
import { cartCalculation } from "../utils/cartCalculation";

const Checkout = () => {
  const { cart } = useCart();
  const totals = useMemo(() => {
    return cartCalculation(cart);
  }, [cart]);
  return (
    <div className='container py-3'>
      <h2>Hello Checkout</h2>
      <div className='card shadow-lg p-2'>
        <div className='card-body'>
          <p className='card-header'>Total Items: {totals.cartItem}</p>
          <p>Total Quantity: {totals.totalQty}</p>
          <p>Total MRP: ₹{totals.totalMrp}</p>
          <p>You Saved: ₹{totals.totalSaved}</p>
          <p>Final Amount: ₹{totals.finalAmount}</p>
        </div>
      </div>
    </div>
  );
};
export { Checkout };
