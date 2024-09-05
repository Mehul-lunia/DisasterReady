import React from "react";
import { Link } from "react-router-dom";
import "./Climatic.css";

const ClimaticPop = () => {
  return (
      <div className="Climate-card">
        <div className="Climate-content">
          <h1 className="Climate-title">Earthquake</h1>
          <p className="Climate-description">
            Stay informed about recent Earthquake activities and their impacts.
            Get detailed reports and safety tips.
          </p>
          <Link className="Climate-button" to="/data">
            Learn More
          </Link>
        </div>
      </div>
  );
};

export default ClimaticPop;
