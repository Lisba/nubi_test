import React from 'react';
import '../assets/styles/components/Input.scss';

const Input = ({ id, type, onChange, className }) => {
    return <input id={id} type={type} onChange={onChange} className={className} />
}

export default Input
