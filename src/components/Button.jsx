import React from 'react';
import '../assets/styles/components/Button.scss';

const Button = ({ id, type, value, className }) => {
    return  <input id={id} type={type} value={value} className={className} />
}

export default Button
