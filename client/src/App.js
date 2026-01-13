import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductListing } from "./pages/ProductListing";
import { Navbar } from "./component/navbar/Navbar";
import "./App.css";
import { Footer } from "./component/footer/Footer";
import { ProductDetails } from "./component/productDetails/ProductDetails";
import { Cart } from "./pages/Cart";
import { useAppFeatures } from "./context/AppContext";
import { Loading } from "./component/loading/Loading";
import { Alerts } from "./component/alerts/Alerts";
import { useCart } from "./context/CartContext";
import { Wishlist } from "./pages/Wishlist";
function App() {
  const { loading } = useAppFeatures();
  const { alert, setAlert } = useCart();
  return (
    <BrowserRouter>
      <Navbar />
      <Alerts alert={alert} onClear={() => setAlert([])} />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      )}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
