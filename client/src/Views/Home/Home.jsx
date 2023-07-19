import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return(
        <div>
            
            <div className="botones">
            <Link to="/register"  className="links"> Registrar nuevo usuario</Link> 
            <Link to="/database"  className="links"> Consultar usuarios</Link>
            </div>

           

        </div>
    )
}

export default Home