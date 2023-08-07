import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import BarcodeGenerator from "./components/BarcodeGenerator/BarcodeGenerator";
import BarcodeScanner from "./components/BarcodeScanner/BarcodeScanner";
import ScanBarcode from "./pages/ScanBarcode";
import GenerateBarcode from "./pages/GenerateBarcode";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/scan" element={<ScanBarcode />} />
          <Route path="/generate" element={<GenerateBarcode />} />
        </Routes>
      </Router>
    </div>
  );
}
