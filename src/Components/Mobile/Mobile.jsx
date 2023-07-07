import React from "react";

import DataContext from "../../Context/DataContext";

import { useContext } from "react";

import "./Mobile.css";

const Mobile = () => {
  const { emergency,alrt } = useContext(DataContext);

  return (
    <div className="mobile-container" style={emergency}>
      <div>
        <div className="data-time"></div>

        <div className="notification"><h1>{alrt}</h1></div>
      </div>
    </div>
  );
};

export default Mobile;
