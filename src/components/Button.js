import React from 'react';

const Button = ({ className, onClick, value, text }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      value={value}>
      {text}
    </button>
  )
}

export default Button;
