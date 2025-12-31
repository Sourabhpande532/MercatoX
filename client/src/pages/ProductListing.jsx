import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FilterSidebar } from "../component/sidebar/FilterSidebar";
import { ProductCard } from "../component/productCard/ProductCard";
import { useQuery } from "../hooks/useQuery";

export const ProductListing = () => {
  const { products, loading } = useContext(AppContext);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [price, setPrice] = useState(300);
  const [rating, setRating] = useState(0);
  const query = useQuery();

  useEffect(() => {
    const category = query.get("category");
    if (category) setSelectedCategory([category]);
  }, []);

  // Something change call effect
  useEffect(() => {
    let response = [...products];
    if (selectedCategory.length)
      response = response.filter((product) =>
        selectedCategory.includes(String(product.category?._id))
      );
    if (price) response = response.filter((product) => product.price > price);
    if (rating)
      response = response.filter((product) => product.rating >= rating);
    setFiltered(response);
  }, [products, selectedCategory, price, rating]);

  if (loading) return <h2 className='text-center'>Loading...</h2>;
  return (
    <div className='row'>
      <div className='col-md-3'>
        <FilterSidebar
          price={price}
          setPrice={setPrice}
          rating={rating}
          setRating={setRating}
        />
      </div>
      <div className='col-md-9'>
        <div>
          <h2>Products ({filtered.length})</h2>
        </div>
        <div className='row'>
          {filtered.map((product) => (
            <div key={product._id} className='col-md-4 mb-3'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
