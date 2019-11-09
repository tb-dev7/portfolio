import React from 'react';
import {Button} from './Button';


export function Links(props){
    const buttons = props.links.map(({label, to}) => <Button key={label} name={label} to={to} />);
    return(
        <div className="navbar a:hover">
            {buttons}     
        </div>
    )}