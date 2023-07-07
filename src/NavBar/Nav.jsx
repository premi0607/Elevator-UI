import React from 'react';
import "./Nav.css"
import {  Link } from "react-router-dom";

const Nav = () => {
   
  return (
    <div className='nav'>
    <ul>
    
    <li>
      <Link to="/" >Home</Link>
    </li>
    <li>
      <Link to="/transactions" >Transactions</Link>
    </li>
    <li>
      <Link to="/config" >Configuration and Settings</Link>
    </li>
    <li>
      <Link to="/usage" >Usage</Link>
    </li>
    </ul>
    </div>
  )
}

export default Nav