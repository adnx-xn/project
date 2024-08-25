import React from "react";
import { Link } from 'react-router-dom';
import logo from "../img/logo.png"

export default function navbar() {



    return (
        <>
            <div className="Navbar">

                <div className="Navbar-logo">
                  
                    <img src={logo} alt="" width={100} height={100}/>
                </div>

                <div className="Navbar-btn">
                    <h3 className="btn-nav"><Link to="Home">Category</Link></h3>
                    <h3 className="btn-nav"><Link to="About">About</Link></h3>
                    <h3 className="btn-nav"><Link to="Cart">Cart</Link></h3>
                    <h3 className="btn-nav"><Link to="ProductList">ProductList</Link></h3>
                    <h3 className="btn-nav"><Link to="Contact">Contact</Link></h3>
                    
                </div>
            </div>
        </>
    )


}
