import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./layout/nav/Nav";
import Home from "./pages/Home/Home";
import { Footer } from "./layout/nav/Footer";
import { Collections } from "./pages/Collection/Collections";
import { PageProduct } from "./pages/PagesProducts/ProductPage";
import { CartProvider } from "./pages/Cart/cartProvide";
import { Cart } from "./pages/Cart/Cart";
import { Contact } from "./pages/Contact/Contact";
import { Gender } from "./pages/PageGender/GenderPages";
import { ErrorPage } from "./pages/Error/Error";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="men" element={<Gender gender={"MEN"} />} />
          <Route path="women" element={<Gender gender={"WOMEN"} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/product/:id" element={<PageProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
