import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();
  return (
    <main className="container">
      <div className='row'>
        {cart.length > 0 ? (
          cart.map((p) => (
            <div key={p._id} className='col-md-3'>
              <div className='card h-100 py-3'>
                <img src={p.product.images[0]} alt={p.product.title} className="img-fluid rounded-start" style={{height:200, objectFit:"cover"}} />
                <div className='card-body'>
                  <h3>{p.product.title}</h3>
                  <p>${p.product.price}</p>
                  <p>${p.product.discount}</p>
                  <p>
                    <b>Size:</b> {p.size}
                  </p>
                  <div className='d-flex gap-2'>
                    <div>
                      <button className="btn btn-outline-info btn-sm">-</button>
                      <span className="px-2">{p.qty}</span>
                      <button className="btn btn-outline-danger btn-sm">+</button>
                    </div>
                    <button className="btn btn-outline-primary">Remove</button>
                    <button className="btn btn-outline-secondary">Add To wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Cart NOT found.</p>
        )}
        <div className="col-md-9">
        <h3>Card Details</h3>
        </div>
      </div>
    </main>
  );
};
export { Cart };
