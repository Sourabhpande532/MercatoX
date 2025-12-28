import { Link } from "react-router-dom";
import "../clothing-categories/clothingcategory.css";
import { useAppFeatures } from "../../context/AppContext";
const ClothingCategory = () => {
  const { categories, loading } = useAppFeatures();
  if (loading) return <p>Loading...</p>;
  return (
    <div className='clothing-categories-container'>
      <div className='categories-title'>
        <h1>CLOTHING CATEGORIES</h1>
      </div>
      <div className='category-block-note'>
        We find the best suppliers and makers of fashion and fancy products.
      </div>
      <div className='clothing-categories'>
        {/* 1st */}
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <div key={category._id} className='category'>
              <img src={category.image} alt={category.name} />
              <div className='overlay'>
                <div className='text'>{category.name}</div>
                <Link
                  to={`/products?category=${category._id}`}
                  className='button'>
                  Shop Now
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>Categories not found.</p>
        )}
      </div>
    </div>
  );
};
export { ClothingCategory };
