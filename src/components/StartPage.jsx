import {React,createContext,useState,useEffect} from "react";
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
import Component_pagination from "./Component_pagination";

export const DataContext = createContext([]);
export const PageNoContext = createContext(1);

const StartPage = () => {
  const [data,setData] = useState([]);
  const [pageNo,setPageNo] = useState(1);

  useEffect(()=>
    {
      fetch(`http://127.0.0.1:5500/api/v1/`)
      .then((result) => {
        console.log(result);
        if (result.status != 200) console.error("Some error occured!");
        return result.json();
      })
      .then((res) => {
        setData(res);
    })
    }
  ,[])
  return (
    <>
    <DataContext.Provider value={data}>
      <PageNoContext.Provider value={{pageNo,setPageNo}}>
        <Start />
        <Earthquake />
        <ClimaticPop />
        <CardComponentQuake/>
        <div style={{"display":"flex","justifyContent":"center","padding":"1em"}}>
        <Component_pagination />
        </div>
        <Footer />
      </PageNoContext.Provider>
    </DataContext.Provider>
  </>  
  );
};

export default StartPage;
