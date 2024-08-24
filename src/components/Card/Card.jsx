import React from 'react'
import './Card.css'

function Card({text, image}) {
  return (
    <div className='card'>
        <img src={image} alt='' />
        <h3 className='cardTitle'>{text}</h3>
        <input type="button" value="BOOK NOW" />
    </div>
  )
}

export default Card