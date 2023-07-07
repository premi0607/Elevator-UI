import React, { useEffect, useState } from "react";

import "./LiftConfig.css";

import axios from "axios";

const LiftConfig = () => {
  const [config, setConfig] = useState([{}]);

  useEffect(() => {
    axios
      .get("https://team3-logesh.azurewebsites.net/api/LiftConfig")
      .then((response) => {
        setConfig(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="lift-config">
      <div className="display1">
        <div class="chip">
          <img
            src="https://t.pimg.jp/095/163/859/1/95163859.jpg"
            alt="Person"
            width="100"
            height="100"
          />

          <p>Battery Level</p>

          <p>{config[0].batteryLevel}%</p>
        </div>

        <div class="chip">
          <img
            src="https://thumbs.dreamstime.com/b/elevator-icon-lift-193137085.jpg"
            alt="Person"
            width="100"
            height="100"
          />

          <p>Lift Brand</p>

          <p>{config[0].liftBrand}</p>
        </div>

        <div class="chip">
          <img
            src="https://img.freepik.com/premium-vector/high-speed-icon-vector-design-isolated-white-background_545793-726.jpg"
            alt="Person"
            width="100"
            height="100"
          />

          <p>Maximum Speed</p>

          <p>{config[0].liftMaxSpeed} m/s</p>
        </div>

        <div class="chip">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/797/421/small/customer-satisfaction-max-meter-icon-in-flat-style-gauge-level-illustration-on-isolated-background-speedometer-sign-business-concept-vector.jpg"
            alt="Person"
            width="100"
            height="100"
          />

          <p>Maximum Capacity</p>

          <p>{config[0].liftCapacity} Person</p>
        </div>

        <div class="chip">
          <img
            src="https://th.bing.com/th/id/OIP.xbH7UBwwFxXtcP7xA3469AHaHa?pid=ImgDet&rs=1"
            alt="Person"
            width="100"
            height="100"
          />

          <p>Battery Type</p>

          <p>{config[0].batteryType} </p>
        </div>
      </div>
    </div>
  );
};

export default LiftConfig;
