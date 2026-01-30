import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useFetch } from "../api/useFetch";
import { url } from "../api/api";
import { useCart } from "./CartContext";
import { apiDelete, apiGet } from "../api/axios";
import { useEffect } from "react";

const OrderContext = createContext();
const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const { fetchCart, pushAlert } = useCart();

  const fetchOrder = async () => {
    try {
      const response = await apiGet(`${url}/orders`);
      setOrder(response.orders);
    } catch (error) {
      console.error(error.message);
    }
  };

  const placeOrders = async (order) => {
    try {
      const response = await fetch(`${url}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "While placing order");
      }
      await fetchOrder();
      await fetchCart();
      pushAlert({ type: "success", text: "Order placed successfully" });
      return data.data.orders;
    } catch (error) {
      console.error(error);
      pushAlert({ type: "error", text: "Failed to place order" });
    }
  };

  const deleteOrder = async (id) => {
    try {
      await apiDelete(`${url}/orders/${id}`);
      await fetchOrder();
    } catch (error) {
      console.log(error);
      pushAlert({ type: "error", text: "Failed to delete order" });
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <OrderContext.Provider value={{ order, placeOrders, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
const useOrder = () => useContext(OrderContext);
export { OrderProvider, OrderContext, useOrder };
