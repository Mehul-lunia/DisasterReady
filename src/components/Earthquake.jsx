import React from "react";
import { Link } from "react-router-dom";
import "./Earthquake.css";

const Earthquake = () => {
  return (
      <div className="earthquake-card">
        <div className="earthquake-content">
          <h1 className="earthquake-title">Climatic Pollution</h1>
          <p className="earthquake-description">
            Stay informed about recent Climatic activities and their impacts.
            Get detailed reports and safety tips.
          </p>
          <Link className="earthquake-button" to="/data">
            Learn More
          </Link>
        </div>
      </div>
  );
};

export default Earthquake;
