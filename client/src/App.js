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
function App() {
  const { loading } = useAppFeatures();
  return (
    <BrowserRouter>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      )}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
