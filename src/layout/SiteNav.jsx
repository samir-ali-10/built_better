import { Link } from 'react-router-dom'
import navbarLogo from "../images/logo.png"
import searchIcon from "../images/search-icon.png"


export default function SiteNav() {
    // var navBar = document.querySelector(".navbar");

    // function scrollFunction() {
    //     if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    //         navBar.classList.add("sticky");
    //     } else {
    //         navBar.classList.remove("sticky");
    //     }
    // }

    // window.onscroll = function () { scrollFunction() };
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
                        <Link to="/services">services</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/shop">shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
                <i class="fa-solid fa-bars"></i>
                <div className="info">
                    <a href="/">Call Us: +01005212460</a>
                    <div className="log">
                        <img src={searchIcon} alt="searchIcon" />
                        <a href="/">login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
