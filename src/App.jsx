import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe o Router
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ConsentBanner from "./components/ConsentBanner";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      {" "}
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-16">
        <ConsentBanner language={language} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route
            path="/portfolio"
            element={<Portfolio language={language} />}
          />
          <Route
            path="/privacy-policy"
            component={PrivacyPolicy}
            element={<PrivacyPolicy language={language} />}
          />
        </Routes>
      </main>
      <Footer language={language} setLanguage={setLanguage} />
    </Router>
  );
}

export default App;
