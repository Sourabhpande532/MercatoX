import { apiGet } from "../api/axios";

const { createContext, useContext, useState, useEffect } = require("react");

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [cRes] = await Promise.all([apiGet("/categories")]);
        setCategories(cRes.categories || []);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <AppContext.Provider value={{ categories, loading }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppFeatures = () => useContext(AppContext);
export { useAppFeatures, AppProvider };
