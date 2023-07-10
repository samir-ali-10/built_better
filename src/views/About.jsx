import React from 'react'
import aboutImage from "../images/img-1.png"

export default function About() {
    return (
        <>
            <div className="about page">
                <div className="container">
                    <div className="heading">
                        <h2>about us</h2>
                        <p>There are many variations of passages of lorem ipsum, There are many variations of passages of lorem ipsum, There are many variations of passages of lorem ipsum, There are many variations of passages of lorem ipsum</p>
                        <button>read more</button>
                    </div>
                    <img src={aboutImage} alt="aboutImage" />
                </div>
            </div>
        </>
    )
}
