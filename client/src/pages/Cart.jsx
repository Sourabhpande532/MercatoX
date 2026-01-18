import { useNavigate } from "react-router-dom";
import { Carts } from "../component/mycart/Carts";
import { useCart } from "../context/CartContext";
import { CartPriceDetails } from "../component/mycart/CartPriceDetails";
import { cartCalculation } from "../utils/cartCalculation";
const Cart = () => {
  const { cart } = useCart();
  const totalAmount = cartCalculation(cart);
  return (
    <main className='container py-4'>
      <div className='row g-4'>
        {/*---- LEFT CART ITEMS ---- */}
        <div className='col-lg-7 col-md-12'>
          <Carts />
        </div>
        {/* ---- RIGHT PRICE DETAILS ---- */}
        <div className='col-lg-5 col-md-6 col-12'>
          <h2>Price Details</h2>
          <CartPriceDetails totalAmount={totalAmount} />
        </div>
      </div>
    </main>
  );
};
export { Cart };
