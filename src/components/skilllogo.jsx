// Skilllogo.jsx

import React from 'react';
import "../styles/index.css";
const Skilllogo = ({ projectDataTo }) => {
  const { name, logo } = projectDataTo;

  return (
    <div className="skill">
      <img src={logo} alt={`${name} Logo`} />
      <h5>{name}</h5>
    </div>
  );
};

export default Skilllogo;
