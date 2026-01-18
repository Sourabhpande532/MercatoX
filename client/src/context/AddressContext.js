import { createContext, useContext, useEffect, useState } from "react";
import { url } from "../api/api";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([]);
  console.log(address);

  const fetchAddress = async (userId) => {
    try {
      const response = await fetch(`${url}/address?userId=${userId}`, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setAddress(data.data.address);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchAddress(420);
  }, []);

  return (
    <AddressContext.Provider value={{ address }}>
      {children}
    </AddressContext.Provider>
  );
};
const useAddress = () => useContext(AddressContext);
export { AddressProvider, useAddress, AddressContext };
