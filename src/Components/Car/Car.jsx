import React, { useState, useEffect, useContext } from "react";
import "./Car.css";
import "../Shaft/Shaft.css"
import DataContext from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

const Car = () => {
  const navigate = useNavigate();

  const {
    setCurrent,
    destination,
    isOpen,setIsOpen,
    FloorValue,postTransaction
  } = useContext(DataContext);
   
  const[crt, setCrt] = useState(0);
   useEffect(()=>{
      if(crt)
      {
        postTransaction();
      }
      setCrt(crt+1);
      
       setTimeout(() => {
        setCurrent(destination);
        setIsOpen(true);
       }, 8500);
      
   },[destination])


  return (
    <>
      <div className="yellow" style={{ top: `${FloorValue[destination]}px` }}/>
    </>
  );
};

export default Car;

// 20:0
// 145:1
// 270:2
// 390:3
// 518:4


//   useEffect(() => {
//     const floorInterval = setInterval(() => {
//       setFloor((prevFloor) => {
//         if (prevFloor === destination) {
//           clearInterval(floorInterval);
//         }
//         return prevFloor < destination ? prevFloor + 1 : prevFloor - 1;
//       });
//     }, 4000);

//     return () => {
//       clearInterval(floorInterval);
//     }
//   }, [destination]);
