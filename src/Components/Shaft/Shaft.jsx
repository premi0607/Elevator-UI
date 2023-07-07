import React, { useState, useEffect, useContext } from "react";
import "./Shaft.css"
import DataContext from "../../Context/DataContext";

const Shaft = () => {

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

      }, 8000);
     
  },[destination])

  return (
    <>
        <div className='shaft-main'>
          <div className='floor-main'>
            <div className='floor'/>
            <div className='floor'/>
            <div className='floor'/>
            <div className='floor'/>
            <div className='floor'/>
          </div>
          <div className='yellow' style={{ bottom: `${destination*145 + 10}px` }}></div>
        </div>
    </>
  )
}

export default Shaft
