import React from 'react'
import './Hero.css'
import hero_1 from './../../assets/hero_1.png'
import hero_2 from './../../assets/hero_2.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="contianer-hero">
            <div className="hero_1-contaner">
                <img src={hero_1} className="hero_1" alt="" srcset="" />
            </div>
            <h2 className='title'>WELCOME TO YASH SYSTEMS</h2>
            <div className="text-image">
                <p>Welcome to SBR COMPUTERS laptop repair in Chanda Nagar, you are at the right place to service your laptop with the best price and quality, since 2009.
                    We are the team of highly skilled and qualified technicians for all your laptop repairs, our company is one of the best laptop repair services in Chanda Nagar and across Hyderabad.
                    We offer Affordable and Reasonable prices and we fix all kind of major issues, quick response, within a hour. We can give solution and we fix at your home, office and anywhere in Hyderabad.
                    We repair all kind of major brands like Dell, HP, Lenovo, Acer, Apple, Compaq, Toshiba, Sony, Samsung, Asus. Whenever you want to have laptop repair supports just call us.
                </p>
                <img src={hero_2} className='hero_2' alt="" />
            </div>
        </div>
    </div>

  )
}

export default Hero