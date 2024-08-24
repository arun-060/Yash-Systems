import React from 'react'
import Card from '../Card/Card'

import a1 from './../../assets/a1.png'
import a2 from './../../assets/a2.png'
import a3 from './../../assets/a3.png'
import a4 from './../../assets/a4.png'

const imgdata = [
    {
        "title":"All in One Computer",
        "location":a1
    },
    {
        "title":"All in One Mac",
        "location":a2
    },
    {
        "title":"All in One Accessories",
        "location":a3
    },
    {
        "title":"All in one printer",
        "location":a4
    }

]

function Features() {
  return (
    <div className="features">
        <h1>SALES & SERVICE WE OFFERED</h1>
        <div className="mape">
           { imgdata.map((data, index) => {
                <Card 
                    key={index} 
                    title={data.title} 
                    image={data.location}
                />
            })}
       </div> 
    </div>
  )
}

export default Features