import React from 'react';
import Nav from './Main-Nav'
import Icons from './Main-Icon'
import './App.scss';

function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Gruppo|Handlee|Montserrat+Subrayada&display=swap" rel="stylesheet" />

                
                <Icons />

                <div class="Section-group">
                    
                    <div class="Main-title">
	                    Timothy Woods
	                </div>
	            
                    <div class="Main-sub-title">
	                    IT Specialist & Software Developer
	                </div>
                    
                </div> 
                
                <div class="topbottom">
                    <Nav />
                </div>
            </header>
                    
            <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        
        </div>
    
    );

}

export default Header;
