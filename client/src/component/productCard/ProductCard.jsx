import { useNavigate } from "react-router-dom";
import "../../component/productCard/product.css";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
const ProductCard = ({
  product: { _id, title, price, rating, images, countInStock, sizes, size },
}) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const navigate = useNavigate();
  return (
    <main>
      <div className='card h-100'>
        <img
          src={images[0] || "https://placehold.co/150"}
          alt={title}
          style={{ height: "380px", objectFit: "cover" }}
          className='img-fluid'
        />
        <div className='card-body d-flex flex-column'>
          <h5
            className='card-title'
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/products/${_id}`)}>
            {title}
          </h5>
          <p className='mb-1'>Price: {price}</p>
          <p className='mb-2'>Rating: {rating}</p>
          <div className='mt-auto d-flex gap-2'>
            <button
              className='btn btn-primary btn-sm'
              onClick={() => addToCart(_id, countInStock, sizes[3])}>
              Add To cart
            </button>
            <button
              className='btn btn-outline-secondary btn-sm'
              onClick={() => addToWishlist(_id)}>
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { ProductCard };
