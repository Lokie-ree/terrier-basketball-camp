import React from 'react'

const CoachCard = () => {

  const coachImg = "/images/waski_profile.jpg";

  return (
    <>
      <div className="borderRadius-10 p-20 m-10 text-center">
        <img className="h-auto borderRadius-50%"
             src={coachImg}
             alt="Coach Picture"
        >
    
        </img>
             
        
        <h2>Jerwaski Coleman</h2>
        <h4>VCH Head Girls Basketball Coach</h4>
        <p>Phone: (xxx) xxx-xxxx</p>
        <p>Email: jcoleman@htdiocese.org</p>
      </div>
    </>
  )
}

export default CoachCard