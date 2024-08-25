import React from 'react'
import './team.css'
import Heading from '../common/Heading'

const TeamCard = () => {
    return (
        <>
            <div className="team container">
                <Heading title='MEET THE TEAM' subtitle='We Have Great Experience Of Driving'/>
                <div className="grid4">
                    <div className="box">
                        <div className="img">
                            <img src="./img/person9.jpeg" alt="" />
                            <div className="icon">
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Aarav Patel</h3>
                            <p>Trainer</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="./img/person12.avif" alt="" />
                            <div className="icon">
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Yashwanthi Joshi</h3>
                            <p>Trainer</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="./img/person11.jpeg" alt="" />
                            <div className="icon">
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Yang Jian</h3>
                            <p>Trainer</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="./img/person4.jpeg" alt="" />
                            <div className="icon">
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Nicholas Walker</h3>
                            <p>Trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard
