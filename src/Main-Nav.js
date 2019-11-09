import React from 'react';
import {Links} from './Links';
import './App.scss';

const menu =[
    {
        label:'TB-Dev7',
        to: 'https://www.google.com'
    },
  
    {
        label:'Home',
        to:'https://github.com/tb-dev7/portfolio/'
    },

    {
        label:'About',
        to:'https://github.com/tb-dev7'
    },
    {
        label: 'Projects',
        to: 'www.google.com'
    }
];

function Nav() {
    return (
        <div class="App">
            <div class="tabs is-centered">
                <ul>
                    <li class="is-active">
                        <a>
                            <span class="icon is-small"><i class="fas fa-thumbtack" aria-hidden="true"></i></span>
                            <span class="has-text-white">TB-Dev7</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                            <span class="has-text-light">Skills</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-code"><i class="fas fa-laptop-code" aria-hidden="true"></i></span>
                            <span class="has-text-light">Projects</span>
                        </a>
                    </li>
                        
                </ul>
            </div>
                                        
            <div class="topright">
                <nav class="level is-mobile">
                    <div class="level-item has-text-centered">
                        <div>
                            <i class="icon ion-logo-linkedin"></i>
                        </div>
                    </div>
    
                    <div class="level-item has-text-centered">
                        <div>
                            <i class="icon ion-logo-github"></i>
                        </div>
                    </div>

                    <div class="level-item has-text-centered">
                        <div>
                            <i class="icon ion-md-information-circle"></i>
                        </div>    
                    </div>  
                </nav>
            </div>
        </div>
    
    );
}

export default Nav;

