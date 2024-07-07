import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderWrapper } from "./components/header/Header";
import { FooterWrapper } from "./components/footer/Footer";
import { HomePage } from "./components/pages/home/HomePage";
import { ProductPage } from "./components/pages/product/ProductPage";
import { AboutWrapper } from "./components/pages/about/About";
import { SharedWrapper } from "./components/pages/shared/Shared";
import { useEffect } from "react";

import { getDatabase ,ref , get , child } from "firebase/database";

import { app } from "./option/environment/Env";
import { useDispatch } from "react-redux";
import {
  allUsersList
}from './store/users/AllUsers';
import { AdminPanelWrapper } from "./components/admin/Admin";
import { UsersPage } from './components/users/UsersWrapper'
import { DeliveryPage } from "./components/pages/delivery/DeliveryWrapper";
import { CheckoutPage } from "./components/pages/checkout/CheckoutWrapper";
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `users/`)).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(allUsersList(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  })
  return (
    <div className="w-full">
      <Router>
        <HeaderWrapper />
        <main className="w-ful xs:mt-14 xs:mb-20 sm:mt-16 md:mt-20 lg:mt-24">
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="discount" element={<SharedWrapper />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="product/:productName" element={<ProductPage />} />
            <Route path="about" element={<AboutWrapper />} />
            <Route path="admin-panel" element={<AdminPanelWrapper />} />
            <Route path="users" element={<UsersPage />} />
          </Routes>
        </main>
        <FooterWrapper />
      </Router>
    </div>
  );
}

export default App;
