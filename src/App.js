import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/flower" element={<Category category="flower" />} />
            <Route
              path="/pre-rolls"
              element={<Category category="pre-rolls" />}
            />
            <Route path="/vape" element={<Category category="vape" />} />
            <Route path="product" element={<Product />}>
              <Route path=":id" element={<Product />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
