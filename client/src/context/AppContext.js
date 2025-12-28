import { apiGet } from "../api/axios";

const { createContext, useContext, useState, useEffect } = require("react");

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [cRes, pRes] = await Promise.all([
          apiGet("/categories"),
          apiGet("/products"),
        ]);
        setCategories(cRes.categories || []);
        setProducts(pRes.products || []);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <AppContext.Provider value={{ products, categories, loading }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppFeatures = () => useContext(AppContext);
export { useAppFeatures, AppProvider,AppContext };
