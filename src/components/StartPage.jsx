import React from "react";
import "./StartPage.css";
import Earthquake from "./Earthquake";
import Footer from "./Footer";
import Earthquakedata from "./Earthquakedata";
import ClimaticPop from "./ClimaticPop";
import CardComponentQuake from "./CardComponentQuake";
import Header from "./Header";
import { Routes, Route, Link } from "react-router-dom"; 
import Start from "./Start";
import ChartContainer from "./ChartContainer";


const StartPage = () => {
  return (
    <>
    <Start />
    <Earthquake />
    <ClimaticPop />
    <CardComponentQuake/>
    <Footer />
  </>  
  );
};

export default StartPage;
