import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Men } from "./pages/Men";
import { Nav } from "./layout/nav/Nav";
import Home from "./pages/Home/Home";
import { Footer } from "./layout/nav/Footer";
import { Collections } from "./pages/Collection/Collections";
import { PageProduct } from "./pages/PagesProducts/ProductPage";
import { CartProvider } from "./pages/Cart/cartProvide";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <CartProvider>

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="collections" Component={Collections} />
        <Route path="men" Component={Men} />
        <Route path="/product/:id" element={<PageProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
