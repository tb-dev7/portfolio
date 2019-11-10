import React from 'react';
import logo from './_main-logo.svg';
import Nav from './Nav';
import {AlertButton} from './AlertButton';
import {Counter} from './Counter';

function Section() {
    return (
        <div className="App">            
            <section className="Section-header">
                <Nav />
                <p>
                    Welcome
                </p>
                <img src={logo} className="App-logo" alt="logo" />  
                <div>
                    <AlertButton />
                    <Counter />
                </div>   
                <div>
                </div>
            </section>
            
        </div>    
    );
}

export default Section;

