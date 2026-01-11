import { createContext, useContext, useEffect, useState } from "react";
import API_URL from "../api/axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await API_URL.get("/cart");
      setCart(response.data?.data?.carts || []);
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
      setCart(res.data?.data?.cart || []);
      pushAlert({ type: "Success", text: "Added to cart" });
    } catch (error) {
      console.error(error);
      pushAlert({ type: "error", text: "Failed to add to cart" });
    }
  };

  const udpateCartQuantity = async (cartId, userUpdateQty) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${cartId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qty: userUpdateQty,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to update cart");
      }
      await fetchCart();
      pushAlert({ type: "info", text: "Updated Successfully" });
    } catch (error) {
      console.error("Update cart failed", error.message);
      pushAlert({ type: "error", text: "Failed to udpate cart" });
    }
  };

  const removeCart = async (cartId) => {
    try {
      setCart((prev) => prev.filter((item) => item._id !== cartId));

      const response = await fetch(`http://localhost:5000/api/cart/${cartId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Delete failed");
      }
      pushAlert({ type: "warning", text: "Removed from cart" });
    } catch (error) {
      console.error("Failed to delete cart!", error.message);
      pushAlert({ type: "error", text: "Failed to remove from cart" });
      fetchCart();
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  /* I don’t care how many times you re-render, I’ll run once only.
    Effects depend ONLY on dependency array, not on re-renders.”
    “Run this effect ONLY ONCE when component mounts”
    ✔ Runs on mount only & ✔ Cleanup runs on unmount
 */
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        alert,
        setAlert,
        udpateCartQuantity,
        removeCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, CartContext, useCart };
