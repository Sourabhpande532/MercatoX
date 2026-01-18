import { useAppFeatures } from "../../context/AppContext";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const Carts = () => {
  const { cart, udpateCartQuantity, removeCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { loading } = useAppFeatures();
  return (
    <div>
      <h4 className='fw-bold mb-3'>🛒 My Cart</h4>
      {!loading && cart.length === 0 && (
        <div className='alert alert-danger text-center'>
          <small className='fw-bold'>Your cart is empty!</small>
        </div>
      )}

      {cart.map(({ _id, product, qty, size }) => (
        <div key={_id} className='card border-0 shadow-lg p-3 mb-4 rounded-4'>
          {!product ? (
            <p className='text-danger'>Product Unavailable</p>
          ) : (
            <div className='row g-3 align-items-center'>
              <div className='col-12 col-sm-3'>
                <img
                  src={product.images[0] || "http://placehold.co/150"}
                  alt='placehold'
                  className='img-fluid w-100 h-100 rounded-4'
                />
              </div>

              <div className='col-12 col-sm-9'>
                <div className='card-body'>
                  <h3>{product.title}</h3>
                  <p className='text-muted mb-1'>
                    ₹{product.price}{" "}
                    <span className='text-success'>
                      {product.discount}% off
                    </span>
                  </p>
                  <p className=''>
                    <strong>Size:</strong>{" "}
                    <span className='badge bg-dark'>{size}</span>
                  </p>
                  <div className='d-flex gap-2'>
                    <div className='d-flex gap-2 align-items-center'>
                      <button
                        className='btn btn-outline-secondary'
                        onClick={() =>
                          udpateCartQuantity(_id, Math.max(1, qty - 1))
                        }>
                        -
                      </button>
                      {qty}
                      <button
                        className='btn btn-outline-secondary'
                        onClick={() => udpateCartQuantity(_id, qty + 1)}>
                        +
                      </button>
                    </div>
                    <button
                      className='btn btn-outline-danger'
                      onClick={() => removeCart(_id)}>
                      Remove
                    </button>
                    <button
                      className='btn btn-outline-primary btn-responsive'
                      onClick={() => addToWishlist(_id)}>
                      Move To Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* ---------------- RIGHT PRICE DETAILS ---------------- */}
      {/*
       */}
    </div>
  );
};
export { Carts };
