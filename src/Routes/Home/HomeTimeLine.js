import React from 'react'
import TimeLine from './TimeLine'

const HomeTimeLine = () => {
    const timelines = [
        {date:"2015",
        description:"Learned my first programming language (Java) and studied the basics of coding"
        },
        {date:"2016",
        description:"Started learning databases specifically mySQL and Access"
        },
        {date:"2017",
        description:"Created my first working system in C#, A point of sales and inventory management system"
        },
        {date:"2018",
        description:"Created a game using unity3d and C#"
        },
        {date:"2019",
        description:"Attended a web seminar that is hosted by Excel Technical"
        },
        {date:"2020",
        description:"Self studied MERN stack through documentation and tutorials, created multiple projects using javascript",
        link:"https://github.com/nchloride" 
        },
    ]
    return (
    <>
        <h1 className="home__timeline_title">Programming timeline</h1>
        <div className="home__timeline">
            {timelines.map((timeline,index)=>(<TimeLine key={index} timeline={timeline}/>))}
        </div>
    </>
    )
}

export default HomeTimeLine
