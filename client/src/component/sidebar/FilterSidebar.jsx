import "../sidebar/filter.css";
const FilterSidebar = ({ price, setPrice, rating, setRating }) => {
  return (
    <div>
      <main className='border-end px-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold'>Filters</h5>
          <div>
            <button className='btn btn-sm btn-outline-secondary mt-3 p-0'>
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
          <div className='form-check'>
            <input type='checkbox' id='category' className='form-check-input' />
            <label className='form-check-label' htmlFor='category'>
              Category +
            </label>
          </div>
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
            <strong>Rating +</strong>
          </h4>
          <div className='form-check'>
            <input
              type='radio'
              name='rating'
              className='form-check-input'
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
