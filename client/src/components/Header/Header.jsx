import React from "react";
import { Link } from "react-router-dom";
import {SlHome} from "react-icons/sl";

function Header() {
    return(
        <div className="header">
            
            <div className='navBar'>
            <Link to="/"><SlHome fontSize="large" color='#fff' size={30} /></Link> 
      </div>
        </div>
    )
}

export default Header