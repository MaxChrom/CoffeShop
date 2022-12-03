import React from 'react'
import logo from '../../../../../public/Images/logo.svg'
import cart from '../../../../../public/Images/bag.png'
import "../../Styles/Navbar.scss"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
   <nav className="header">
            <nav className="header_logo">
                <img src={logo} alt="" />
            </nav>
            <nav className="header_menu">
                <p className="header_menu-text">
                    <Link to="/Home">Home</Link>
                </p>
                <p className="header_menu-text">
                    <Link to="/Menu">Menu</Link>
                </p>
                <p className="header_menu-text">
                    <Link to="/Coffee">Coffee</Link>
                </p>
                <p className="header_menu-text">
                    <Link to="/Story">About Us</Link>
                </p>
                <p className="header_menu-text">
                    <Link to="/Cart"> 
                        <img className='header_menu-text-cart' src={cart} alt="bag" />
                    </Link>
                </p>
            </nav>
        </nav>
  )
}

export default Navbar