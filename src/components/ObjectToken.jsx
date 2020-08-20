import React, { useState, useEffect } from 'react';
import '../assets/styles/components/ObjectToken.scss';

const ObjectToken = ({ token }) => {

    const [src, setSrc] = useState('');

    const nestedToken = (token.files || []).map((token, index) => {
        return <ObjectToken key={index} token={token} />
    });

    useEffect(() => {
        token.type === 'file' ?
            setSrc(require('../assets/static/file.png').default)
        :
            setSrc(require('../assets/static/folder.png').default)
    }, []);

    return (
        <div className='objectTokenDiv'>
            <div>
                <img src={src} className='iconImage'></img>
                {token.name}
            </div>
            {nestedToken}
        </div>
    )
}

export default ObjectToken;
