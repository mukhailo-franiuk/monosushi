import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderWrapper } from "./components/header/Header";
import { FooterWrapper } from "./components/footer/Footer";
import { HomePage } from "./components/pages/home/HomePage";
import { ProductPage } from "./components/pages/product/ProductPage";
import { AboutWrapper } from "./components/pages/about/About";

function App() {
  return (
    <div className="w-full">
      <Router>
        <HeaderWrapper />
        <main className="w-ful xs:mt-14 xs:mb-20 sm:mt-16 md:mt-20 lg:mt-24">
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="product/:productName" element={<ProductPage />} />
            <Route path="about" element={<AboutWrapper />} />
          </Routes>
        </main>
        <FooterWrapper />
      </Router>
    </div>
  );
}

export default App;
