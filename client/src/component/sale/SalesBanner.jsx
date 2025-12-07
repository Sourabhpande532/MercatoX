import { useNavigate } from "react-router-dom";
import "../sale/salebanner.css";
const SalesBanner = () => {
  const navigate = useNavigate();
  return (
    <div className='sale'>
      <div className='sale-title'>
        <h2>SALE</h2>
      </div>
      <p className='sale-block-note'>
        The most awaiting sale is here to elevate you wardrobe.
      </p>
      <div className='sale-image-grid'>
        <img
          src='https://res.cloudinary.com/dptfwcnro/image/upload/v1683903022/E-comm%20ATTIREX/Sale-Banner-1_mzj7ko.gif'
          alt='Sale-Banner-1'
          onClick={() => {
            navigate("/products");
          }}
        />
        <img
          src='https://res.cloudinary.com/dptfwcnro/image/upload/v1683903949/E-comm%20ATTIREX/Sale-Banner-2_rifmbx.jpg'
          alt='Sale-Banner-2'
          onClick={() => {
            navigate("/products");
          }}
        />
        <img
          src='https://res.cloudinary.com/dptfwcnro/image/upload/v1683903950/E-comm%20ATTIREX/Sale-Banner-3_si788m.jpg'
          alt='Sale-Banner-3'
          onClick={() => {
            navigate("/products");
          }}
        />
      </div>
    </div>
  );
};

export {SalesBanner}