import React from 'react';
import './Button.css';

function Button(props) {
  const { variant = 'primary', children, ...rest } = props;
  return <button className={`button ${variant}`}>{children}</button>;
}

export default Button;
