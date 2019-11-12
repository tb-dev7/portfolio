import React from 'react';

export function Button(props) {
    return (
        <a href={props.to}>
            {props.name}
        </a>
    );

}


