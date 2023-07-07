import React from 'react'
import OuterCar from '../Components/Outer-Car/OuterCar';
import Shaft from '../Components/Shaft/Shaft';
import PopUp from '../Components/PopUp/PopUp';
import Mobile from '../Components/Mobile/Mobile';


const Home = () => {
  return (
    <div className='App-container'>
        <PopUp/>
        <Mobile/>
        <OuterCar/>
        <Shaft/>
    </div>
  )
}

export default Home
