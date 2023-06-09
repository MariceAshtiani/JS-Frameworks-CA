import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/home";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import ContactPage from "./pages/contact";
import CheckoutSuccessPage from "./pages/checkoutSuccess";
import Layout from "./components/Layout";

export default function App() {
  return (
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="product/:id" element={<ProductPage />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="checkout" element={<CheckoutPage />} />
    <Route path="checkoutSuccess" element={<CheckoutSuccessPage />} />
  </Route>
</Routes>
  );
}

