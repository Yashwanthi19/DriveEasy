import React from 'react'
import Heading from '../common/Heading'
import './courses.css'

const CoursesCard = () => {
    return (
        <>
            <div className="courses">
                <Heading title='TRANDING COURSES' subtitle='Our Courses Upskill You With Driving Training'/>
                <div className="container grid3 flexsm">
                    <div className="box">
                        <div className="light">
                            <span className='money'>INR 5000</span>
                            <p className='title'>Automatic Car Lessons</p>
                            <p className='para'>Master driving with ease in our comprehensive automatic car lessons</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Beginner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>3 Week</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="light">
                            <span className='money'>INR 5000</span>
                            <p className='title'>Highway Driving Lesson</p>
                            <p className='para'>Gain confidence and skills for safe, effective highway driving</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Beginner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>3 Week</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="light">
                            <span className='money'>INR 5000</span>
                            <p className='title'>International Driving</p>
                            <p className='para'>Prepare for international driving with our expert training and guidance</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Beginner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>3 Week</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesCard
