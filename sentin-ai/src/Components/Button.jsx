import React from 'react';
import '../Style/Button.css';

const Button = ({ className, name, onClick, folder }) => {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
