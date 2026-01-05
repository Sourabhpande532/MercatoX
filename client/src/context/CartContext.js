import { createContext, useContext, useEffect, useState } from "react";
import API_URL from "../api/axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const fetchCart = async () => {
    try {
      const response = await API_URL.get("/cart");
      setCart(response.data.data.carts || []);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (productId, qty = 1, size = "") => {
    try {
      const res = await API_URL.post("/cart", {
        productId,
        qty,
        size,
      });
      setCart(res.data.data.cart || []);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, fetchCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, CartContext, useCart };
