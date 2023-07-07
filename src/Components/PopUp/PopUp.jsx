import React,{useContext, useEffect} from 'react'
import "./PopUp.css"
import DataContext from "../../Context/DataContext"
const PopUp = () => {

    const {person} = useContext(DataContext);
    
  return (
    <>
      <div className='pop-container' style={ person>5?{top:`100px`}:{top:`-300px`}}>
          <img src="https://cdn.dribbble.com/users/466099/screenshots/5360798/ego_dribbble.jpg" alt="" />
          <h3>OverLoad...</h3>
      </div>
    </>
  )
}

export default PopUp
