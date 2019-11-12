import React from 'react';

export function AlertButton(){
    
    function handleOnClick(){
        alert("success");
    }



    return (
        <button onClick={handleOnClick}>Guess What?</button>
    )
}