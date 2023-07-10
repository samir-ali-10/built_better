import React from 'react'
import icon_1 from "../images/icon-1.png"
import icon_2 from "../images/icon-2.png"
import icon_3 from "../images/icon-3.png"
import icon_4 from "../images/icon-4.png"

export default function Services() {

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
            <div className="services page">
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
        </>
    )
}
