import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductListing } from "./pages/ProductListing";
import { Navbar } from "./component/navbar/Navbar";
import { AppProvider } from "./context/AppContext";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
