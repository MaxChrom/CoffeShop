import React, { useContext } from 'react'
import logo from '../../../../../public/Images/logo.svg'
import "../../Styles/Navbar.scss"
import { Link } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from "@mui/material/Badge";
import { useCustomContexts } from "../../Context/ContextsProvider";
import { useState, useEffect } from 'react'
function Navbar() {
    const { inCart, setInCart } = useCustomContexts();
    const [showCart, setShowCart] = useState()
    
  return (
   <nav className="header">
            <nav className="header_logo">
                <img src={logo} alt="" />
            </nav>
            <nav className="header_menu">
                <p className="header_menu-text">
                    <Link to="/home">Home</Link>
                </p>
                <p className="header_menu-text">
                    <Link to="/menu">Menu</Link>
                </p>
                <p className="header_menu-text">
                    <Link to="/shop">Shop</Link>
                </p>
                <p className="header_menu-text">
                    <Link to="/story">About Us</Link>
                </p>
                <p className="header_menu-text">
                    <Link to="/cart"> 
                        {
                        // inCart.length > 0 ? 
                            <Badge color="secondary" badgeContent={inCart.length}>
                            <ShoppingBasketIcon />{" "}
                            </Badge> 
                            // : ""
                           }
                    </Link>
                </p>
            </nav>
        </nav>
  )
}

export default Navbar