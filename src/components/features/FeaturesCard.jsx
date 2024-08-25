import React from 'react'
import './features.css'
import Heading from '../common/Heading'

const FeaturesCard = () => {
    return (
        <>
            <div className="features">
                <div className="container grid2 flexsm">
                    <div className="left">
                        <Heading title='WHY CHOOSE US!' subtitle='Best Driving Training Agency In Your City'/>
                        <div className="features-info">
                            <p>Choose the best driving training agency in your city for expert instruction, personalized lessons, and a proven track record of helping students succeed. Our commitment to excellence ensures you’ll receive top-notch training tailored to your needs</p>
                            <div className="check">
                                <div className="one-check">
                                    <div className="fully">
                                        <i className='fa fa-check'></i>
                                        <span>Fully Licensed</span>
                                        <p>Certified and fully licensed for top-quality instruction.</p>
                                    </div>
                                    <div className="afordable">
                                        <i className='fa fa-check'></i>
                                        <span>Afordable Fee</span>
                                        <p>Competitive pricing for exceptional driving education</p>
                                    </div>
                                </div>
                                <div className="two-check">
                                    <div className="online ">
                                        <i className='fa fa-check'></i>
                                        <span>Online Tracking</span>
                                        <p>Track your progress online with ease and convenience</p>
                                    </div>
                                    <div className="best">
                                        <i className='fa fa-check'></i>
                                        <span>Best Trainers</span>
                                        <p>Learn from the best trainers in the industry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src="./img/about-2.jpg" alt="" />
                            <img src="./img/about-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesCard
