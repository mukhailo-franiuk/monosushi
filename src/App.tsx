import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HomePage } from "./components/pages/home/HomePage";
import { ProductsPage } from "./components/pages/product/ProductsPage";
import { DiscountPage } from "./components/pages/discount/DiscountPage";
import { CheckoutPage } from "./components/pages/checkout/Checkout";
import { DeliveryPage } from "./components/pages/delivery/DeliveryPage";
import { AboutPage } from "./components/pages/about/AboutPage";
import { SingUpPage } from "./components/pages/singUp/SingUp";

function App() {
  return (
    <div className="w-full">
      <Router>
        <Header />
        <main className="w-full">
          <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="discount" element={<DiscountPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="delivery" element={<DeliveryPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="sing-up" element={<SingUpPage />} />
              <Route path="product/:nameProduct" element={<ProductsPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
