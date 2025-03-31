import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe o Router
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      {" "}
      {/* Envolva a aplicação com o Router */}
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route
            path="/portfolio"
            element={<Portfolio language={language} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
