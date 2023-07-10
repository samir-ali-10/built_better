import React from 'react'
import furnitureOne from "../images/img-2.png"
import furnitureTwo from "../images/img-3.png"

export default function Shop() {
    return (
        <>
            <div className="furniture page">
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
        </>
    )
}
