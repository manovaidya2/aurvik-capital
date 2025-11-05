import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./resourcepage/BlogPage";
import Footer from "./components/Footer";
import CaseStudiesPage from "./resourcepage/CaseStudiesPage";
import FreeToolsPage from "./resourcepage/FreeToolsPage ";
import ServicesPage from "./servicepage/ServicesPage ";
import About from "./pages/About";
import Bootcamp from "./pages/Bootcamp";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
           <Route path="/blog" element={<BlogPage />} />
           <Route path="/case-studies" element={<CaseStudiesPage />} />
           <Route path="/free-tools" element={<FreeToolsPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/bootcamp" element={<Bootcamp/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
