import React from 'react'
import projectImageOne from "../images/img-4.png"

export default function Contact() {
    return (
        <>
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
