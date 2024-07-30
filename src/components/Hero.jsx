import React from 'react'


const Hero = () => {
  return (
    <div 
      className="hero min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/images/girls_bball1.png)" }}>

      <div className="hero-content text-vc-blue text-center">
        <div className="max-w-md">
          
          <button className="btn rounded-full bg-vc-blue text-vc-gold">Get Started</button>
        </div>
      </div>
</div>
  )
}

export default Hero