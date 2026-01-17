import { createContext, useContext, useEffect, useState } from "react";
import { url } from "../api/api";
import { useCart } from "./CartContext";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { pushAlert } = useCart();

  const fetchWishlist = async () => {
    try {
      const response = await fetch(`${url}/wishlist`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setWishlist(data.data?.wishlist || []);
    } catch (error) {
      throw error;
    }
  };

  const addToWishlist = async (productId) => {
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
      pushAlert({ type: "success", text: "Added to wishlist" });
    } catch (error) {
      console.log(error.message);
      pushAlert({ type: "error", text: "Failed to add to wishlist" });
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      await fetch(`${url}/wishlist/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      await fetchWishlist();
      pushAlert({ type: "warning", text: "Remove from wishlist" });
    } catch (error) {
      console.error(error.message);
      pushAlert({ type: "error", text: "Failed to add to wishlist" });
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => useContext(WishlistContext);
export { WishlistProvider, WishlistContext, useWishlist };
