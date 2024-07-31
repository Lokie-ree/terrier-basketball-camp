// components/CoachCard.js
import React from 'react'

const CoachCard = ({ name, bio, image }) => (
  <div className="card shadow-lg compact side bg-vc-blue text-vc-gold">
    <figure>
      <img className="w-32 h-32 object-cover rounded-full"
           src={image} 
           alt={`${name}'s picture`} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{bio}</p>
    </div>
  </div>
);

export default CoachCard;
