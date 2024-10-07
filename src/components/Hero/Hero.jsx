import React from 'react'
import './Hero.css'
import hero_1 from './../../assets/hero_1.png'
import hero_2 from './../../assets/hero_2.png'
import a1 from './../../assets/a1.png'
import a2 from './../../assets/a2.png'
import a3 from './../../assets/a3.png'
import a4 from './../../assets/a4.png'
import Card from '../Card/Card'
import Features from '../Features/Features'
import Service from '../Service/Service'
import Aim from '../Aim/Aim'
import YashSystems from '../YashSystems/YashSystems'
import Feedback from '../Feedback/Feedback'
import Navbar from '../Navbar/Navbar'

function Hero() {
  return (
    <>
    {/* <Navbar/> */}
    <div className='hero'>
        <div className="contianer-hero">
            <div className="hero_1-contaner">
                <img src={hero_1} className="hero_1" alt="" srcset="" />
            </div>
            <h2 className='title'>WELCOME TO YASH SYSTEMS</h2>
            <div className="text-image">
                <p>Welcome to SBR COMPUTERS laptop repair in Chanda Nagar, you are at the right place to service your laptop with the best price and quality, since 2009.
                    <br /><br />
                    We are the team of highly skilled and qualified technicians for all your laptop repairs, our company is one of the best laptop repair services in Chanda Nagar and across Hyderabad.
                    <br /><br />
                    We offer Affordable and Reasonable prices and we fix all kind of major issues, quick response, within a hour. We can give solution and we fix at your home, office and anywhere in Hyderabad.
                    <br /><br />
                    We repair all kind of major brands like Dell, HP, Lenovo, Acer, Apple, Compaq, Toshiba, Sony, Samsung, Asus. Whenever you want to have laptop repair supports just call us.
                </p>
                <img src={hero_2} className='hero_2' alt="" />
            </div>
        </div>
    </div>
    <Features />
    <Service />
    <Aim />
    <YashSystems />
    <Feedback />
    </>
  )
}

export default Hero