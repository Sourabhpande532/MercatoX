import { useNavigate } from "react-router-dom";
import {SearchIcon,PersonOutlineOutlinedIcon,FavoriteBorderOutlinedIcon,ShoppingBagOutlinedIcon} from "../../assets"
import "../navbar/nabar.css"

const Navbar = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
// 
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <span className="nav-logo" onClick={() => navigate("/")}>
            AttireX
          </span>
          <ul className="nav-menu">
            <li>
              <span className="nav-home-btn" onClick={() => navigate("/")}>
                Home
              </span>
            </li>
            <li>
              <span
                className="nav-buy-now"
                onClick={() => navigate("/products")}
              >
                Buy Now
              </span>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <form className="nav-search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Search for items"
              onChange={handleSearch}
            />
            <SearchIcon className="nav-icon" />
          </form>
          <div className="nav-icons-container">
            <span className="nav-icons" onClick={() => navigate("/profile")}>
              <PersonOutlineOutlinedIcon className="nav-icon" />
            </span>
            <span className="nav-icons" onClick={() => navigate("/wishlist")}>
              <FavoriteBorderOutlinedIcon className="nav-icon" />
            </span>
            <span
              className="nav-icons nav-icon-large"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBagOutlinedIcon className="nav-icon" />
            </span>
          </div>
        </div>
      </div>
      <div className="mobile-search-form">
        <input
          type="text"
          placeholder="Search for items"
          onChange={handleSearch}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };