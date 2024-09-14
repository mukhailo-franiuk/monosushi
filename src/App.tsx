import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HomePage } from "./components/pages/home/HomePage";

function App() {
  return (
    <div className="w-full">
      <Router>
        <Header />
        <main className="w-ful xs:mt-14 xs:mb-20 sm:mt-16 md:mt-20 lg:mt-24">
          <Routes>
              <Route path="" element={<HomePage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
