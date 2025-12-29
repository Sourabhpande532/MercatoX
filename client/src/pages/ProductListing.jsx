import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FilterSidebar } from "../component/sidebar/FilterSidebar";
import { ProductCard } from "../component/productCard/ProductCard";

export const ProductListing = () => {
  const { products, loading } = useContext(AppContext);
  console.log(products);
  if (loading) return <h2 className='text-center'>Loading...</h2>;
  return (
    <div className='row'>
      <div className='col-md-3'>
        <FilterSidebar />
      </div>
      <div className='col-md-9'>
        <div>
          <h2>Products ({products.length})</h2>
        </div>
        <div className='row'>
          {products.map((product) => (
            <div key={product._id} className='col-md-4 mb-3'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
