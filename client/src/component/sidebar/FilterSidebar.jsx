import "../sidebar/filter.css";
const FilterSidebar = () => {
  return (
    <div>
      <main>
        <div>
          <h2>Filters</h2>
          <div>
            <button>Clear</button>
          </div>
        </div>
        <div className='sidebar-price'>
          <h3>
            <strong>Price</strong>
          </h3>
          <input
            type='range'
            min='300'
            max='3000'
            step='300'
            className='form-range'
          />
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
        <div className='sidebar-rating'>
          <h3>
            <strong>Rating 0+</strong>
          </h3>
          <input
            type='range'
            min='0'
            max='5'
            step='0.5'
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
