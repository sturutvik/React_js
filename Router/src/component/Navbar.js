import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navi= useNavigate()
  return (
   <div style={{backgroundColor:"gray"}}>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Contact">CONTACT</Link>
        </li>
        <li>
            <Link to="/Blog">BLOG</Link>
        </li>
        <li>
            <Link to="/From">from</Link>
        </li>
        <li>
            <Link to="/Table">Table</Link>
        </li>
        <li>
            <Link to="/Login">Login</Link>
        </li>
      
    </ul>
        <button onClick={()=>navi(-1)}>Back</button>
        <button onClick={()=>navi(1)}>Next</button> 
        <hr/>
   </div>
  )
}
