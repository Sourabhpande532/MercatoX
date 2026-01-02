import { useParams } from "react-router-dom";
import { useAppFeatures } from "../../context/AppContext";
import API_URL from "../../api/axios";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { products, loading } = useAppFeatures();
  console.log(products);

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);

  const filterProduct = products.filter((each) =>
    each?.category?._id.includes(product.category?._id)
  );
  console.log(filterProduct);

  useEffect(() => {
    async function fetchProductData() {
      const productResponse = await API_URL.get(`/products/${id}`);
      const currentProduct = productResponse.data.data.product || [];
      setProduct(currentProduct || []);
    }
    fetchProductData();
  }, [id]);

  if (!product) return <div className='text-center mt-5'>Loading...</div>;
  const discountPrice =
    product.offPrice - Math.floor((product.offPrice * product.discount) / 100);

  return (
    <div className='container py-4'>
      <div className='row'>
        <div className='col-md-6'>
          <div className=''>
            <img
              src={product.images?.[0] || "https://placehold.co/200"}
              className='card-img-top'
              style={{ objectFit: "cover" }}
              alt={product.title}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <h2 className='fw-bold'>
            <strong>{product.title}</strong>
          </h2>
          <p className='text-muted'>{product.category?.name}</p>
          <p className='fw-bold me-2'>{product.rating} ⭐</p>
          <h2>
            <strong className='text-dark'>₹{discountPrice}</strong>
          </h2>
          <p>
            <span className='text-decoration-line-through text-muted'>
              ₹{product.offPrice}
            </span>
            <span className='text-success fw-bold ms-2'>
              {product.discount} % OFF
            </span>
          </p>

          <div className='my-3'>
            <strong>Quantity:</strong>
            <div className='d-flex align-items-center mt-2'>
              <button className='btn btn-outline-primary'>+</button>
              <span className='px-3'>1</span>
              <button className='btn btn-outline-secondary'>-</button>
            </div>
          </div>

          <div className='my-3'>
            <strong>Size:</strong>
            <div className='d-flex gap-2'>
              {product?.sizes?.map((size) => (
                <div key={size}>
                  <button className='btn btn-outline-dark'>{size}</button>
                </div>
              ))}
            </div>
          </div>

          <div className='d-flex mt-4'>
            <button className='btn btn-primary btn-lg me-3'>Add to Cart</button>
            <button className='btn btn-outline-danger btn-lg'>
              ♥️ Wishlist
            </button>
          </div>

          <div className='row text-center mt-4'>
            <div className='col-3'>
              <div className='small'>
                10 days
                <br />
                Returnable
              </div>
            </div>
            <div className='col-3'>
              <div className='small'>
                Pay on <br />
                delivery
              </div>
            </div>
            <div className='col-3'>
              <div className='small'>
                Free <br />
                Delivery
              </div>
            </div>
            <div className='col-3'>
              <div className='small'>
                Secure <br />
                Payment
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h5 className='fw-bold'>Description</h5>
        <ul>
          {product.description
            ?.split(".")
            .map((line, idx) =>
              line.trim() ? <li key={idx}>{line.trim()}</li> : null
            )}
        </ul>
      </div>

      <div className='py-4'>
        <h5 className='fw-bold mb-3'>More items you may like</h5>
        <div className='row'>
          {filterProduct.map((each) => (
            <div key={each._id} className='col-md-3 col-6 mb-4'>
              <div className='card h-100'>
                <img
                  src={each.images?.[0]}
                  className='card-img-top'
                  style={{ height: 200, objectFit: "cover" }}
                  alt={each.title}
                />
                <div className='card-body text-center d-flex flex-column'>
                  <h6 className='fw-bold' style={{ fontSize: 14 }}>
                    {each.title}
                  </h6>
                  <p>${each.price}</p>
                  <button className='btn btn-sm btn-dark mt-auto'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { ProductDetails };
