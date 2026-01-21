import { createContext, useContext, useEffect, useState } from "react";
import { url } from "../api/api";
import { useCart } from "./CartContext";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([]);
  const { pushAlert } = useCart();

  const fetchAddress = async () => {
    try {
      const response = await fetch(`${url}/address`, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setAddress(data.data.address || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  const addAddress = async (address) => {
    try {
      const response = await fetch(`${url}/address`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(address),
      });
      const data = await response.json();
      if (!response.ok) {
        return new Error(data.error || "Failed to add data");
      }
      setAddress(data.data.address || []);
      pushAlert({ type: "success", text: "Address added" });
    } catch (error) {
      console.error(error.message);
      pushAlert({ type: "error", text: "Failed to add address" });
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <AddressContext.Provider value={{ address, addAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
const useAddress = () => useContext(AddressContext);
export { AddressProvider, useAddress, AddressContext };
