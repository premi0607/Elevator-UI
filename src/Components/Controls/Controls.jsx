import React, { useContext, useEffect } from "react";

import "./Controls.css";

import DataContext from "../../Context/DataContext";

import { useNavigate } from "react-router-dom";

const Controls = () => {
  const {
    setDestination,
    setIsOpen,
    person,
    setPerson,
    setToggle,
    setGetOut,
    setEmergency,
    setAlrt
  } = useContext(DataContext);

  const navigate = useNavigate();

  const handleClick = (f) => {
    setIsOpen(false);

    setTimeout(() => {
      setDestination(f);
    }, 4500);
  };

  const handlePerson = () => {
    setToggle(true);

    setTimeout(() => {
      setToggle(false);
    }, 4000);
  };

  const handleGetOut = () => {
    setToggle(true);

    setGetOut(true);

    setTimeout(() => {
      setToggle(false);

      setGetOut(false);
    }, 3000);
  };

  return (
    <div className="main-controller">
      <div className="person-count">
        <button
          className="person"
          onClick={() => {
            if (person > 0) {
              handleGetOut();

              setPerson(person - 1);
            }
          }}
        >
          {" "}
          -{" "}
        </button>

        <div className="count">{person}</div>

        <button
          className="person"
          onClick={() => {
            if (person < 6) {
              handlePerson();

              setPerson(person + 1);
            }
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>

      <div className="eme">
        

        {person > 5 ? (
          <></>
        ) : (
          <div className="control-container">
          <button onClick={() => handleClick(0)}>0</button>

          <button onClick={() => handleClick(1)}>1</button>

          <button onClick={() => handleClick(2)}>2</button>

          <button onClick={() => handleClick(3)}>3</button>

          <button onClick={() => handleClick(4)}>4</button>
        </div>
          
        )}
        <div className="control-container">
            <button
              onClick={(e) => {
                setEmergency({
                  backgroundColor: "#0093E9",

                  backgroundImage:
                    "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                });
                setAlrt("We were struct");

              }}
            >
              E!
            </button>

            <button
              onClick={(e) => {
                setEmergency({
                  backgroundColor: "#4158D0",

                  backgroundImage:
                    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                });
                setAlrt("We need help");
              }}
              
            >
              A!
            </button>
          </div>
      </div>
    </div>
  );
};

export default Controls;
