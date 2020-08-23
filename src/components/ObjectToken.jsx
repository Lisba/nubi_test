import React, { useState, useEffect } from 'react';
import '../assets/styles/components/ObjectToken.scss';

const ObjectToken = ({ token }) => {

    const [src, setSrc] = useState('');
    const [display , setDisplay] = useState(true)

    const nestedToken = (token.files || []).map((token, index) => {
        return <ObjectToken key={index} token={token} />
    });

    const handleOnClick = (event) => {
        if(token.type === 'directory')
        {
            if(display)
            {
                event.target.nextSibling.style.display = 'none';
                setDisplay((prevState) => !prevState);
                setSrc(require('../assets/static/closeFolderIcon.png').default);
            }
            else
            {
                event.target.nextSibling.style.display = 'block';
                setDisplay((prevState) => !prevState);
                setSrc(require('../assets/static/openFolderIcon.png').default);
            }
        }
    }

    const handleOnMouseOver = (event) => {
        if(token.type === 'directory')
        {
            event.target.style.cursor = 'pointer';
        }
    }

    useEffect(() => {
        token.type === 'file'
        ?  setSrc(require('../assets/static/fileIcon.png').default)
        :  setSrc(require('../assets/static/openFolderIcon.png').default);
    }, []);

    return (
        <div className='objectTokenDiv'>
            <div onClick={handleOnClick} onMouseOver={handleOnMouseOver}>
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
