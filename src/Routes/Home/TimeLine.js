import React from 'react'

const TimeLine = ({timeline:{date,description,link}}) => {
    return (
    <div className="timeline">
  
        <div className="timeline__dot"></div>
        <section className="timeline__record">
            <h1>{date}</h1>
            <p>{description} {link?<a href={link} target="_blank" rel="noreferrer" >Link</a>:""}</p>
        </section>
      
    </div>
    )
}

export default TimeLine
