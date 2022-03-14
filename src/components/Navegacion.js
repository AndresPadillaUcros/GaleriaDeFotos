import React from 'react'
import {Link} from "react-router-dom";

import ImagenLogo11 from '../images/logo1.png'
import ImagenLogo22 from '../images/logo2.png'
import ImagenLogo33 from '../images/logo3.png'

const Navegacion = () => {
  return (
    <div className="container mt-3 padre">
        <Link to="/Logo1" className="links">
            <figure>
                <img src={ImagenLogo11} alt="" className="tamaño-img"/>
                <figcaption>Logo1</figcaption>
            </figure> 
        </Link>

        <Link to="/Logo2" className="links">
            <figure>
                <img src={ImagenLogo22} alt="" className="tamaño-img"/>
                <figcaption>Logo2</figcaption>
            </figure> 
        </Link>

        <Link to="/Logo3"className="links">
            <figure>
                <img src={ImagenLogo33} alt="" className="tamaño-img"/>
                <figcaption>Logo3</figcaption>
            </figure> 
        </Link>
    </div>
  )
}

export default Navegacion