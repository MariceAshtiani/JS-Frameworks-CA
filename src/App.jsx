import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import ContactPage from "./pages/Contact";
import Layout from "./components/Layout";

export default function App() {
  return (
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="Contact" element={<ContactPage />} />
    <Route path="Product/:id" element={<ProductPage />} />
    <Route path="Cart" element={<CartPage />} />
    <Route path="Checkout" element={<CheckoutPage />} />
  </Route>
</Routes>
  );
}

