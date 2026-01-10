import { createContext, useContext, useEffect, useState } from "react";
import API_URL from "../api/axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await API_URL.get("/cart");
      setCart(response.data.data.carts || []);
    } catch (error) {
      console.error(error);
    }
  };

  function pushAlert(a) {
    setAlert((prev) => [...prev, a]);
    // FIFO(First In First out)
    setTimeout(() => setAlert((prev) => prev.slice(1)), 5000);
  }

  const addToCart = async (productId, qty = 1, size = "") => {
    try {
      const res = await API_URL.post("/cart", {
        productId,
        qty,
        size,
      });
      setCart(res.data.data.cart || []);
      pushAlert({ type: "Success", text: "Added to cart" });
    } catch (error) {
      console.error(error);
      pushAlert({ type: "error", text: "Failed to add to cart" });
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, alert, setAlert }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, CartContext, useCart };
