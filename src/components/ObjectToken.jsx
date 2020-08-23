import React, { useState, useEffect } from 'react';
import '../assets/styles/components/ObjectToken.scss';

const ObjectToken = ({ token }) => {

    const [src, setSrc] = useState('');
    const [display , setDisplay] = useState(true)

    const nestedToken = (token.files || []).map((token, index) => {
        return <ObjectToken key={index} token={token} />
    });

    const handleOnClick = (event) => {
        if(display)
        {
            event.target.nextSibling.style.display = 'none';
            setDisplay((prevState) => !prevState);
        }
        else
        {
            event.target.nextSibling.style.display = 'block';
            setDisplay((prevState) => !prevState);
        }
    }

    useEffect(() => {
        token.type === 'file' ?
            setSrc(require('../assets/static/fileIcon.png').default)
        :
            setSrc(require('../assets/static/folderIcon.png').default)
    }, []);

    return (
        <div className='objectTokenDiv'>
            <div onClick={handleOnClick}>
                <img src={src} className='iconImage'></img>
                {token.name}
            </div>
            <div className='nestedItems'>
                {nestedToken}
            </div>
        </div>
    )
}

export default ObjectToken;
