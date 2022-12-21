import React from 'react';

const HandleName =({HandleEvent,FirstName}) => {
    return (
        <button onClick={()=>HandleEvent(FirstName)}>
            Click Here
        </button>
    )
}

export default HandleName;