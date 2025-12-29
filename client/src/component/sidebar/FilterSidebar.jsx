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
          <h3>Categories</h3>
          <br />
          <input type='checkbox' />
        </div>
        <div className='sidebar-rating'>
          <h3>
            <strong>Rating 0+</strong>
          </h3>
          <input
            type='range'
            min='100'
            max='1800'
            step='100'
            className='form-range'
          />
        </div>
        <div className='sidebar-rating2'>
          <h3>
            <strong>Rating +</strong>
          </h3>
          <input type="radio"/> <label>4 Star & above</label>
          <input type="radio"/> <label>3 Star & above</label>
        </div>
        
      </main>
    </div>
  );
};
export { FilterSidebar };
