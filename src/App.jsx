import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Men } from "./pages/Men";
import { Nav } from "./layout/nav/Nav";
import Home from "./pages/Home/Home";
import { Footer } from "./layout/nav/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="men" Component={Men} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
