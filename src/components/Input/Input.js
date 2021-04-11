import React from 'react';
import './Input.css';

function Input(props) {
  const { variant, text } = props;
  return (
    <input className={`input ${variant}`} type='text' placeholder={text} />
  );
}

export default Input;
