import React, { useState } from 'react'
import './header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    const [navlist, setNavlist] = useState(false)
    return (
        <>
            <header>
                
                <div className="head flex">
                    <div className="logo" >
                        <i className='fa fa-car'></i>
                        <span>DriveEasy</span>
                    </div>
                    <div className="right flex">
                        <div className="nav">
                            <ul className={navlist ? "small flex1" : "flex"}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/courses'>Courses</Link></li>
                                <li className='pages'><span>Pages</span>
                                    <i class="fa fa-chevron-down arrow"></i>
                                    <div className='inside'>
                                        <li><Link to='/features'>Features</Link></li>
                                        <li><Link to='/appointment'>Appointment</Link></li>
                                        <li><Link to='/our-team'>Our Team</Link></li>
                                        <li><Link to='/testimonial'>Testimonial</Link></li>
                                    </div>
                                </li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <button className="btn1">
                            <Link to="/login">Login</Link><i className='fa fa-arrow-right'></i>
                        </button>
                    </div>
                    <div className="toggle">
                        <button onClick={() => setNavlist(!navlist)}>
                            {navlist ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

