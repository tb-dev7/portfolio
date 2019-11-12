import React from 'react';

export function Counter(){
    var counter = 0;
    function add(){
        return counter + 1;
    }

    return(
        <button onClick={add}>{counter}</button>

    )

}