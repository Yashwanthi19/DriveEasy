import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Back from '../common/Back';
import Heading from '../common/Heading';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c0dk5d9', 'template_33zic39', form.current, 'K-XLsxF_e-_5nxfEV')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.999278678839!2d78.36621959679933!3d17.447753085193312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1724589663126!5m2!1sen!2sin";

    return (
        <>
            <Back title='Contact Us' />
            <div className="contact">
                <div className="container grid2 flexsm">
                    <div className='left'>
                        <iframe src={map} title='map'></iframe>
                    </div>
                    <div className="right">
                        <Heading title='CONTACT US' subtitle='If You Have Any Query, Please Contact Us' />
                        <p className='down'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="/contact">Download Now</a>.</p>
                        <form ref={form} onSubmit={sendEmail} className='contact-in'>
                            <div className="one">
                                <input type="text" name="user_name" placeholder='Your Name' required />
                                <input type="email" name="user_email" placeholder='Your Email' required />
                            </div>
                            <div className="two">
                                <input type="text" name="subject" placeholder='Subject' required />
                            </div>
                            <textarea name="message" placeholder='Message' cols="30" rows="5" required></textarea>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
