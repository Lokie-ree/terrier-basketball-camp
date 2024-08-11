import React from 'react'

const PageSection = ({ title, paragraph, image, textLeft }) => {
  return (
    <div className={`border border-red-500 flex flex-col ${textLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className="md:w-1/2 h-80 border">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="md:w-1/2 h-80 border">
        <img src={image} 
             alt="Picture"
             width={200}
        />
      </div>
    </div>
  )
}

export default PageSection