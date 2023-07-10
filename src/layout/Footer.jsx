import React from 'react'
import facebookIcon from "../images/fb-icon.png"
import twitterIcon from "../images/twitter-icon.png"
import instagramIcon from "../images/instagram-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"


export default function Footer() {
    return (
        <>
            <div className="infos">
                <div className="container">
                    <div className="information">
                        <div className="special_card">
                            <h2>Let's design together</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse repudiandae iure. Nostrum est, nihil commodi pariatur voluptatibus delectus laborum?</p>
                        </div>
                        <div className="card">
                            <h2>let us help you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in asperiores cupiditate tempore odio iure nesciunt placeat cumque eius eligendi!</p>
                        </div>
                        <div className="card">
                            <h2>information</h2>
                            <ul>
                                <li><a href="/">about us</a></li>
                                <li><a href="/">career</a></li>
                                <li><a href="/">sell on shop</a></li>
                                <li><a href="/">press & news</a></li>
                                <li><a href="/">competitions</a></li>
                                <li><a href="/">terms & conditions</a></li>
                            </ul>
                        </div>
                        <div className="card">
                            <h2>our design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repellendus quibusdam dicta eos praesentium, quasi quos! Provident laborum voluptatibus magnam?</p>
                        </div>
                    </div>
                    <form action="/">
                        <input type="email" name="subscribe" placeholder='Enter your email' />
                        <input type="submit" value="SUBSCRIBE" />
                    </form>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="socials">
                        <a href="/">
                            <img src={facebookIcon} alt="facebookIcon" />
                        </a>
                        <a href="/">
                            <img src={twitterIcon} alt="twitterIcon" />
                        </a>
                        <a href="/">
                            <img src={instagramIcon} alt="instagramIcon" />
                        </a>
                        <a href="/">
                            <img src={linkedinIcon} alt="linkedinIcon" />
                        </a>
                    </div>
                    <div className="copyright">
                        <p>2023 all rights reserved designed by samir</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
