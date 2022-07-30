import './Footer.css'
import {GrInstagram} from 'react-icons/gr'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
    return(
        <footer id='footer'>
            <a href="#" className="footer_logo">DANIYAL</a>

            <ul className="permalinks">
                <li><a href="#">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://www.instagram.com/daniyal.namdar/"  target="_blank"><GrInstagram/></a>
                <a href="https://www.facebook.com/daniyal.namdar.3/"  target="_blank"><BsFacebook/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; DANIYAL Website, All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer