import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { HeaderWrapper } from "./components/header/Header";
import { FooterWrapper } from "./components/footer/Footer";
import { HomePage } from "./components/pages/home/HomePage";
import { ProductPage } from "./components/pages/product/ProductPage";

function App() {
  return (
    <div className="w-full">
      <Router>
          <HeaderWrapper />
          <main className="w-ful xs:mt-14 sm:mt-16">
              <Routes>
                  <Route path="" element={<HomePage />} />
                  <Route path="product/:productName" element={<ProductPage />} />
              </Routes>
          </main>
          <FooterWrapper />
      </Router>
    </div>
  );
}

export default App;
