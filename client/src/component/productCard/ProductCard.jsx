import "../../component/productCard/product.css";
const ProductCard = ({product:{title,price,rating,images}}) => {
  return (
    <main>
      <div className='card'>
        <img src={images[0] || 'https://placehold.co/150'} alt='img' className='img-fluid' />
        <div className='card-body'>
          <h2>{title}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <button className='btn btn-outline-primary'>Add To cart</button>
          <button className='btn btn-outline-secondary'>Wishlist</button>
        </div>
      </div>
    </main>
  );
};

export { ProductCard };
