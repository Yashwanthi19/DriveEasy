import React from 'react'
import Heading from '../common/Heading'
import './about.css'

const AboutCard = () => {
    return (
        <>
            <div className="about">
                <div className="container grid2 flexsm">
                    <div className="left">
                        <div className="img">
                            <img src="./img/about-2.jpg" alt="" />
                            <img src="./img/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <Heading title='ABOUT US' subtitle='We Help Students To Pass Test & Get A License On The First Try'/>
                        <div className="about-info">
                            <p>At our driving school, we are dedicated to helping students succeed by providing the highest quality instruction and personalized support. Our experienced instructors focus on building your skills and confidence, ensuring you’re fully prepared for both the written and road tests.</p>
                            
                            <div className="check">
                                <div className="one-check">
                                    <div className="fully">
                                        <i className='fa fa-check'></i>
                                        <span>Fully Licensed</span>
                                    </div>
                                    <div className="online">
                                        <i className='fa fa-check'></i>
                                        <span>Online Tracking</span>
                                    </div>
                                </div>
                                <div className="two-check">
                                    <div className="afordable ">
                                        <i className='fa fa-check'></i>
                                        <span>Afordable Fee</span>
                                    </div>
                                    <div className="best">
                                        <i className='fa fa-check'></i>
                                        <span>Best Trainers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="button flex">
                                <div className="button1">
                                    Read More
                                </div>
                                <div className="button2">
                                    <i className='fa fa-phone'></i>
                                    <span>+91 94765 47376</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard
