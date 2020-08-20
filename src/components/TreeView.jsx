import React from 'react';
import ObjectToken from './ObjectToken';
import '../assets/styles/components/TreeView.scss';

const TreeView = ({ data }) => {
    return (
        <div className='treeContainerDiv'>
            {data &&
                data.map((token, index) => {
                    return(
                        <ObjectToken key={index} token={token} />
                    )
                })
            }
        </div>
    )
}

export default TreeView;
