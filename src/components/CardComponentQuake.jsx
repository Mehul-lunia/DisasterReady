import { React, useState, useEffect } from "react";
import ComponentTable from "./ComponentTable";
import Loading from "./Loading";
import ChartContainer from "./ChartContainer";
import { motion } from "framer-motion";

function CardComponentQuake() {
  const [data, setData] = useState([]);
  const [mag, setMag] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((result) => {
        console.log(result);
        if (result.status != 200) console.error("Some error occured!");
        return result.json();
      })
      .then((res) => {
        setData(res);
        const arr = [];
        for (let i = 0; i < 5; i++) {
          arr.push([res[i].Region, res[i].Magnitude]);
        }
        arr.unshift(["Region", "Magnitude"]);
        console.log(arr);
        setMag(arr);
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {mag.length == 0 && <Loading />}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {data.length == 0 && <Loading />}
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        {mag.length > 0 && <ChartContainer mag={mag} />}
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
