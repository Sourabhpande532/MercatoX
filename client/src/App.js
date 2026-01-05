import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductListing } from "./pages/ProductListing";
import { Navbar } from "./component/navbar/Navbar";
import "./App.css";
import { Footer } from "./component/footer/Footer";
import { ProductDetails } from "./component/productDetails/ProductDetails";
function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
