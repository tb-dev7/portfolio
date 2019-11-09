import React from 'react';
import logo from './_main-logo.svg';
import './App.scss';

import {AlertButton} from './AlertButton';
import {Counter} from './Counter';
import Header from './Main-Header'


function App() {
    return (
        <div className="App">
            
            <Header /> 
            
            <section className="Section-header">
                {/*<Links links={menu} />*/}
                <p>
                    Welcome
                </p>
                <img src={logo} className="App-logo" alt="logo" />
        
                
                
                <div>
                    <AlertButton />
                    <Counter />
                </div>   
            </section>
            
            <body>
                <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
            </body>
        </div>

    
    );
}

export default App;

