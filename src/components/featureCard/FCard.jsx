import React from 'react';
import './FCard.css';

const FCard = ({ item }) => {
  return (
    <div className="fCard">
        {item.icon}
        <p>{item.title}</p>
    </div>
  )
}

export default FCard