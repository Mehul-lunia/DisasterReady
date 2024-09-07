import { React, useState, useEffect } from "react";
import ComponentTable from "./ComponentTable";
import Loading from "./Loading";
import ChartContainer from "./ChartContainer";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext, PageNoContext } from "./StartPage";


 // Make Data and Curr_Page_no global for the entire react project
function CardComponentQuake() {
  const TotalData = useContext(DataContext);
  const {pageNo} = useContext(PageNoContext);

  let start_idx = (pageNo-1) * 5;
  let end_idx = pageNo * 5;
  const data = TotalData.slice(start_idx,end_idx);
  const mag = [];
  for(let i = 0; i<data.length; i++)
    {
      mag.push([data[i].Region,data[i].Magnitude]);
    }
  mag.unshift(["Region","Magnitude"]);
  console.log(mag)
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {data.length == 0 && <Loading />}
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        {data.length > 0 && <ChartContainer mag={mag} />}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        {data.length > 0 && <ComponentTable data={data} />}
      </motion.div>
    </>
  );
}

export default CardComponentQuake;
