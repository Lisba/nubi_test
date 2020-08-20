import React from 'react';
import '../assets/styles/components/ObjectToken.scss';

const ObjectToken = ({ token }) => {

    const nestedToken = (token.files || []).map((token, index) => {
        return <ObjectToken key={index} token={token} />
    })

    console.log(nestedToken)
    return (
        <div className='objectTokenDiv'>
            <div>{token.name}</div>
            {nestedToken}
        </div>
    )
}

export default ObjectToken;
