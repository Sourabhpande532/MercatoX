import { useNavigate } from "react-router-dom";

const CartPriceDetails = ({totalAmount}) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <div className='card-header'>
            <b>Total MRP:</b> {totalAmount.totalMrp} Rs
          </div>
          <div className='card-header'>
            <b>You saved:</b> {totalAmount.totalSaved} Rs
          </div>
          <div className='card-header'>
            <b>Final Amount:</b> {totalAmount.finalAmount} Rs
          </div>
          <p>Price Details: {totalAmount.cartItem}</p>
        </div>
      </div>
      <button className='btn btn-primary' onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
};
export { CartPriceDetails };
