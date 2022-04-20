import React, { useState } from 'react';
import './style.scss';

const GroupButton = (props) => {
  const [newIndex, setNewIndex] = useState(0);
  const handleClick = (title, index) => {
    setNewIndex(index);
    props.handleClick(title)
  }

  return (
  <section className="group-button-container d-flex justfy-content-around justify-content-around">
    {props.titles.map((title, index) => 
      <span 
        className={`c-pointer m-1 ${newIndex === index && 'active'}`} 
        onClick={() => handleClick(title, index)}
      >
        {title}
      </span>
    )}
  </section>
)};

export default GroupButton;
