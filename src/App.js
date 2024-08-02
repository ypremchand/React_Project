import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopWear from "./Components/TopWear";
import BottomWear from "./Components/BottomWear";
import FootWear from "./Components/FootWear";
import Mobiles from "./Components/Mobiles";
import Accessories from "./Components/Accesseries";
import Laptops from "./Components/Laptops";
import SignUp from "./Components/SignUp"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div style={{ backgroundColor: "#cef2f0", minHeight: "100%", minWidth: "100%" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/TopWear" element={<TopWear />} />
          <Route path="/BottomWear" element={<BottomWear />} />
          <Route path="/FootWear" element={<FootWear />} />
          <Route path="/Mobiles" element={<Mobiles />} />
          <Route path="/Laptops" element={<Laptops />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
