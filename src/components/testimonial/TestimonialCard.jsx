import React from 'react'
import Heading from '../common/Heading'
import './testimonial.css'

const TestimonialCard = () => {
    return (
        <>
            <div className="testimonial container">
                <Heading title='TESTIMONIAL' subtitle='What Our Clients Say!'/>
                <div className="information">
                    <div className="img">
                        <img src="./img/testimonial-1.jpg" alt="" />
                        <i className='fa fa-quote-left'></i>
                    </div>
                    <p className='fee'>I had an amazing experience with this driving school! The instructors were patient and really made learning easy and stress-free. Thanks to their personalized approach, I passed my driving test on the first try. I’m so confident on the road now, and I couldn’t have done it without themx</p>
                    <hr />
                    <div className="text">
                            <h3>Jack Blues</h3>
                            <p className='pro'>Software Engineer</p>
                    </div>
                    <div className="dots">
                        <i className='active'></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard
