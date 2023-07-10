import React from 'react'
import icon_1 from "../images/icon-1.png"
import icon_2 from "../images/icon-2.png"
import icon_3 from "../images/icon-3.png"
import icon_4 from "../images/icon-4.png"
import aboutImage from "../images/img-1.png"
import furnitureOne from "../images/img-2.png"
import furnitureTwo from "../images/img-3.png"
import projectImageOne from "../images/img-4.png"
import projectImageTwo from "../images/img-5.png"
import projectImageThree from "../images/img-6.png"
import feedbackOne from "../images/img-7.png"
import feedbackTwo from "../images/img-8.png"
import quoteIcon from "../images/quote-icon.png"

export default function HomePage() {

    let services = [
        {
            service: "furniture",
            img: icon_1
        },
        {
            service: "office",
            img: icon_2
        },
        {
            service: "home",
            img: icon_3
        },
        {
            service: "bedroom",
            img: icon_4
        }
    ]

    return (
        <>
            <div className='landing_page'>
                <h1>furniture</h1>
                <p>There are many variation of passages of lorem ipsum available, but <br /> the majority have suffered alteration in some fo</p>
                <button>contact us</button>
            </div>

            <div className="services">
                <div className="container">
                    <div className="heading">
                        <h2>our services</h2>
                        <p>There are many variations of passages of lorem ipsum</p>
                    </div>
                    <div className="our_services">
                        {
                            services.map((ser, index) =>
                                <div className='service' key={index}>
                                    <img src={ser.img} alt="icon" />
                                    <h3>{ser.service}</h3>
                                    <p>There are many variation of passages of lorem ipsum available, but the</p>
                                    <button>read more</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <div className="heading">
                        <h2>about us</h2>
                        <p>There are many variations of passages of lorem ipsum, There are many variations of passages of lorem ipsum, There are many variations of passages of lorem ipsum, There are many variations of passages of lorem ipsum</p>
                        <button>read more</button>
                    </div>
                    <img src={aboutImage} alt="aboutImage" />
                </div>
            </div>

            <div className="furniture">
                <div className="container">
                    <div className="heading">
                        <h2>our furniture</h2>
                        <p>There are many variation of passages of lorem ipsum</p>
                    </div>
                    <div className="categories">
                        <div className="kitchen">
                            <div className="image">
                                <img src={furnitureOne} alt="furnitureOne" />
                            </div>
                            <h3>tempor incididunt ut labore et dolore</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, eligendi. Et perspiciatis ipsam accusamus, quidem qui aliquid tenetur placeat doloribus suscipit explicabo error ut nostrum voluptate iste dolores omnis ad.</p>
                        </div>
                        <div className="sink">
                            <div className="image">
                                <img src={furnitureTwo} alt="furnitureTwo" />
                            </div>
                            <h3>tempor incididunt ut labore et dolore</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, eligendi. Et perspiciatis ipsam accusamus, quidem qui aliquid tenetur placeat doloribus suscipit explicabo error ut nostrum voluptate iste dolores omnis ad.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="who_we_are">
                <div className="container">
                    <div className="heading">
                        <h2>who we are ?</h2>
                        <p>designers & innovators</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error placeat modi culpa officiis pariatur alias numquam saepe deserunt fuga, reiciendis aut ex. Nesciunt tempore a mollitia assumenda voluptatem porro doloribus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quos assumenda impedit hic omnis, dolor, consequatur totam dolorum, fugiat delectus facere aperiam quo qui itaque harum! Nemo est laboriosam eos?</p>
                    <button>get a quote</button>
                </div>
            </div>

            <div className="projects">
                <div className="container">
                    <div className="heading">
                        <h2>our projects</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, reiciendis.</p>
                    </div>
                    <div className="designs">
                        <div className="design">
                            <img src={projectImageOne} alt="projectImageOne" />
                            <p>modern home design</p>
                        </div>
                        <div className="design">
                            <img src={projectImageTwo} alt="projectImageTwo" />
                            <p>modern home design</p>
                        </div>
                        <div className="design">
                            <img src={projectImageThree} alt="projectImageThree" />
                            <p>modern home design</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="clients">
                <div className="container">
                    <div className="heading">
                        <h2>what are saying our clients</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sint.</p>
                    </div>
                    <div className="feedbacks">
                        <div className="left_feedback">
                            <div className="image">
                                <img className='profile' src={feedbackOne} alt="feedbackOne" />
                                <img className='quote' src={quoteIcon} alt="quoteIcon" />
                            </div>
                            <div className="info">
                                <h3>loksan</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi officiis esse cupiditate aut et tenetur vitae delectus quis itaque, animi, sint sit culpa similique corporis.</p>
                            </div>
                        </div>
                        <div className="right_feedback">
                            <div className="image">
                                <img className='profile' src={feedbackTwo} alt="feedbackTwo" />
                                <img className='quote' src={quoteIcon} alt="quoteIcon" />
                            </div>
                            <div className="info">
                                <h3>loksan</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi officiis esse cupiditate aut et tenetur vitae delectus quis itaque, animi, sint sit culpa similique corporis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact_us">
                <div className="container">
                    <div className="heading">
                        <h2>contact us</h2>
                    </div>
                    <div className="message_us">
                        <form action="/">
                            <input type="text" name="name" placeholder='Name' />
                            <input type="email" name="email" placeholder='Email' />
                            <input type="text" name="phone" placeholder='Phone Number' />
                            <textarea name="message" cols="30" rows="10" placeholder='Message'></textarea>
                            <input type="submit" value="SEND" />
                        </form>
                        <div className="image">
                            <img src={projectImageOne} alt="projectImageOne" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
