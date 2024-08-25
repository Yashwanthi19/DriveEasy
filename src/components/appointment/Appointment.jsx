import React, { useRef } from 'react'
import Heading from '../common/Heading'
import Back from '../common/Back'
import emailjs from 'emailjs-com';
import './appointment.css'

const Appointment = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_il8wa5o', 'template_dicrx5g', form.current, 'Q1bbQ1Ab0aDGHHPEP')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };
    return (
        <>
            <Back title='Appointment'/>
            <div className="appointment">
                <div className="container grid2 flexsm">
                    <div className="left">
                        <div className="img">
                            <img src="./img/about-2.jpg" alt="" />
                            <img src="./img/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <Heading title='APPOINTMENT' subtitle='Make An Appointment To Pass Test & Get A License On The First Try'/>
                        <form ref={form} onSubmit={sendEmail} className='appoint-in'>
                            <div className="one">
                                <input type="text" name="user_name" placeholder='Your Name' />
                                <input type="email" name="user_email" placeholder='Your Email' />
                            </div>
                            <div className="two">
                                <input type="text" name="course_type" placeholder='Courses Type' />
                                <input type="text" name="car_type" placeholder='Car Type' />
                            </div>
                            <textarea placeholder='Message' cols="30" rows="5"></textarea>
                            <input type="button" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment
