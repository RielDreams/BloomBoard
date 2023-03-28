import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Announcement/>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
