import React from 'react';

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      value={props.value}>
      {props.text}
    </button>
  )
}

export default Button;
