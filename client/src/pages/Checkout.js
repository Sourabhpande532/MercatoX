import { useMemo, useState } from "react";
import { CartPriceDetails } from "../component/mycart/CartPriceDetails";
import { useCart } from "../context/CartContext";
import { cartCalculation } from "../utils/cartCalculation";
import { useOrder } from "../context/OrderContext";
import { useAddress } from "../context/AddressContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const { placeOrders } = useOrder();
  const { address } = useAddress();
  const [selectedAddressId, setSelectedAddressId] = useState(
    address?.[0]?._id || null,
  );
  const totals = useMemo(() => {
    return cartCalculation(cart);
  }, [cart]);

  const doCheckout = async () => {
    const order = await placeOrders({
      items: cart.map((ci) => ({ product: ci.product._id, qty: ci.qty })),
      total: totals.finalAmount,
      address: selectedAddressId,
    });
    if (order) <Navigate to='/profile' replace />;
  };

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
      <button onClick={doCheckout} className='btn btn-success w-100 py-2'>
        Place Order
      </button>
    </div>
  );
};
export { Checkout };
