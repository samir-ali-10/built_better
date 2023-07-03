import { Link } from 'react-router-dom'
import navbarLogo from "../images/logo.png"
export default function SiteNav() {
    return (
        <div className="navbar_container">

            <nav className="navbar">
                <div className="logo">
                    <img src={navbarLogo} alt="navbarLogo" />
                </div>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="">services</Link>
                    </li>
                    <li>
                        <Link to="">about</Link>
                    </li>
                    <li>
                        <Link to="">shop</Link>
                    </li>
                    <li>
                        <Link to="">contact</Link>
                    </li>
                </ul>
                <i class="fa-solid fa-bars"></i>
                <div className="info">
                    <a href="/">Call Us: +01005212460</a>
                    <div className="log">
                        <p>p</p>
                        <a href="/">login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
