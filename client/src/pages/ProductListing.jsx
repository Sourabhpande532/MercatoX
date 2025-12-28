import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FilterSidebar } from "../component/sidebar/FilterSidebar";
import { ProductCard } from "../component/productCard/ProductCard";

export const ProductListing = () => {
  const { products, loading } = useContext(AppContext);
  console.log(products);
  if (loading) return <h2 className='text-center'>Loading...</h2>;
  return (
    <div className="d-flex">
      <FilterSidebar />
      <ProductCard />
    </div>
  );
};
