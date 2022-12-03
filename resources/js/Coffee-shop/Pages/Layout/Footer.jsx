import React from 'react'
import '../../Styles/Footer.scss'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
        <div class="footer">
            <nav class="footer__menu">
                <p class="footer__menu__text">
                    <Link to="/Home">Home</Link>
                </p>
                <p class="footer__menu__text"><Link to="/Menu">Menu</Link></p>
                <p class="footer__menu__text"><Link to="/Coffee">Coffee</Link></p>
                <p class="footer__menu__text">
                    <Link to="/Story">About Us</Link>
                </p>
            </nav>
            
            <div class="footer__social">
                <h3 class="footer__social__hashtag">#GENERICHIPSTERCOFFEE</h3>
                <div class="footer__social__follow-us">
                    Follow us on <a href="https://www.twitter.com">Twitter</a> and
                    <a href="https://www.instagram.com"> Instagram</a>
                </div>
            </div>
            </div>
    </footer>
  )
}

export default Footer