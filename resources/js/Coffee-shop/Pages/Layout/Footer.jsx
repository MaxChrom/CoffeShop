import React from 'react'
import '../../Styles/Footer.scss'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
        <div className="footer">
            <nav className="footer__menu">
                <p className="footer__menu__text">
                    <Link to="/Home">Home</Link>
                </p>
                <p className="footer__menu__text"><Link to="/Menu">Menu</Link></p>
                <p className="footer__menu__text"><Link to="/Coffee">Coffee</Link></p>
                <p className="footer__menu__text">
                    <Link to="/Story">About Us</Link>
                </p>
            </nav>
            
            <div className="footer__social">
                <h3 className="footer__social__hashtag">#GENERICHIPSTERCOFFEE</h3>
                <div className="footer__social__follow-us">
                    Follow us on <a href="https://www.twitter.com">Twitter</a> and
                    <a href="https://www.instagram.com"> Instagram</a>
                </div>
            </div>
            </div>
    </footer>
  )
}

export default Footer