import { useAppFeatures } from "../../context/AppContext";
import "../sidebar/filter.css";
const FilterSidebar = ({
  price,
  setPrice,
  rating,
  setRating,
  sortByRating,
  setSortByRating,
  sort,
  setSort,
  selectedCategory,
  setSelectedCategory,
  clearAll,
}) => {
  const { categories } = useAppFeatures();
  const toggleHandleCategory = (id) => {
    const isSelected = selectedCategory.includes(id);
    if (isSelected) {
      const makeUnchecked = selectedCategory.filter(
        (category) => category !== id
      );
      setSelectedCategory(makeUnchecked);
    } else {
      const makeChecked = [...selectedCategory, id];
      setSelectedCategory(makeChecked);
    }
  };
  return (
    <div>
      <main className='border-end px-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold'>Filters</h5>
          <div>
            <button
              onClick={() => clearAll()}
              className='btn btn-sm btn-outline-secondary mt-3 p-0'>
              Clear
            </button>
          </div>
        </div>

        <div className='sidebar-price mt-3'>
          <h3>
            <strong>Price</strong>
          </h3>
          <input
            type='range'
            min='300'
            max='4000'
            step='300'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='form-range'
          />
          <p>Up to ₹{price}</p>
        </div>
        <div>
          <h4>
            <strong>Categories</strong>
          </h4>
          {categories.map((category) => (
            <div key={category._id} className='form-check'>
              <input
                type='checkbox'
                id={category._id}
                className='form-check-input'
                checked={selectedCategory.includes(category._id)}
                onChange={() => toggleHandleCategory(category._id)}
              />
              <label className='form-check-label' htmlFor={category._id}>
                {category.name}
              </label>
            </div>
          ))}
        </div>
        <div className='sidebar-rating mt-3'>
          <h3>
            <strong>Rating {rating}+</strong>
          </h3>
          <input
            type='range'
            min='0'
            max='5'
            step='0.5'
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className='form-range'
          />
        </div>

        <div className='mt-4'>
          <h4>
            <strong>Rating</strong>
          </h4>
          <div className='form-check'>
            <input
              type='radio'
              name='rating'
              className='form-check-input'
              checked={sortByRating === 4}
              onChange={() => setSortByRating(4)}
              id='filterByFour'
            />
            <label className='form-check-label' htmlFor='filterByFour'>
              4 Star & above
            </label>
          </div>
          <div className='form-check'>
            <input
              type='radio'
              name='rating'
              className='form-check-input'
              checked={sortByRating === 3}
              onChange={() => setSortByRating(3)}
              id='filterByThree'
            />
            <label className='form-check-label' htmlFor='filterByThree'>
              3 Star & above
            </label>
          </div>
        </div>
        <div className='mt-4'>
          <h4>
            <strong>Sort by</strong>
          </h4>
          <div className='form-check'>
            <input
              type='radio'
              id='low'
              className='form-check-input'
              name='sort'
              checked={sort === "low"}
              onChange={() => setSort("low")}
            />
            <label className='form-check-label' htmlFor='low'>
              Price - Low to High
            </label>
          </div>
          <div className='form-check'>
            <input
              type='radio'
              className='form-check-input'
              id='high'
              name='sort'
              checked={sort === "high"}
              onChange={() => setSort("high")}
            />
            <label className='form-check-label' htmlFor='high'>
              Price - High to Low
            </label>
          </div>
        </div>
      </main>
    </div>
  );
};
export { FilterSidebar };
