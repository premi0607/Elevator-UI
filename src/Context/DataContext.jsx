import axios from "axios";

import React, { useState, createContext, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [destination, setDestination] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [person, setPerson] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [getOut, setGetOut] = useState(false);
  const [emergency, setEmergency] = useState({ backgroundColor: "#666666" });
  const [alrt, setAlrt] = useState("");


  function postTransaction() {
    axios
      .post("https://team3-logesh.azurewebsites.net/api/Transaction", {
        currentFloor: current,
        destinationFloor: destination,
        personCount: person,
        personWeight: person * 60,
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <DataContext.Provider
      value={{
        current,setCurrent,
        destination,setDestination,
        isOpen,setIsOpen,
        person,setPerson,
        toggle,setToggle,
        getOut,setGetOut,
        postTransaction,
        emergency,setEmergency,
        alrt, setAlrt
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
