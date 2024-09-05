import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";
import "./App.css";
import Map from "./components/Map";
import StartPage from "./components/StartPage";
import Info from "./components/Info";
import { Routes, Route, Link } from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Earthquakedata from "./components/Earthquakedata";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<Map />} />
        <Route path="/data" element={<Earthquakedata />} />
      </Routes>
    </>
  );
}

export default App;
