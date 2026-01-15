import { createContext, useContext, useEffect, useState } from "react";
import { LOCAL_URL, url } from "../api/api";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  console.log(wishlist);
  const fetchWishlist = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      //   setWishlist(data.data?.wishlist);
    } catch (error) {
      throw error;
    }
  };

  const addWishlistToCart = async (productId) => {
    try {
      const response = await fetch(url + "/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
        }),
      });
      const data = await response.json();
      setWishlist(data.data.wishlist || []);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    // fetchWishlist();
    addWishlistToCart("6950f75efc6f97c3b39781fc");
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
function useWishlist() {
  return useContext(WishlistContext);
}
export { WishlistProvider, WishlistContext, useWishlist };
