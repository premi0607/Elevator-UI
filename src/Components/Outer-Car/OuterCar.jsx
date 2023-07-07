import React, { useEffect, useState, useContext } from 'react';
import "./OuterCar.css"
import DataContext from "../../Context/DataContext"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Controls from '../Controls/Controls';


const OuterCar = () => {



  const {floor, isOpen, setIsOpen, toggle, current,getOut } = useContext(DataContext);
  // const floor = [534,401,268,135,0]  

  useEffect(()=>{
        setTimeout(() => {
            setIsOpen(true);
        }, 2000);

  },[])
  
  return (
    <div className='front'>
        <div className='all'>
            <div className='display'>{current}</div>
            <div className='container'>
            <div className='elevator-container'>
                <div className={`elevator ${isOpen ? 'open' : 'closed'}`}>
                    <div className="door1" />
                    <div className="door2" />
                </div>          
            </div>
                {isOpen?<Controls/>:<Direction/>}
            </div>
        </div>
        { (isOpen&&toggle)?
          <div className='dude-main' style={getOut?{width:"500px", left:"300px"}:{}}>
            <div class='dude-wrapper'>
              <div class='dude'></div>
            </div>
          </div>:<></>

        }
        <hr />
        <hr style={{width:"1200px", marginLeft:"-410px"}}/>
        {/* <button onClick={toggleDoor}>Toggle Door</button> */}
    </div>
    
  );
};

export default OuterCar;


export const Direction = () => {
  const {floor, isOpen, setIsOpen, toggle, setToggle, current, } = useContext(DataContext);
  return (
    <div className='direction'>
        <div className='up' onClick={()=>setIsOpen(!isOpen)}> <ExpandLessIcon fontSize='large'/> </div>
        <div className='down' onClick={()=>setIsOpen(!isOpen)}> <ExpandMoreIcon fontSize='large'/> </div>             
    </div>
  )
}


