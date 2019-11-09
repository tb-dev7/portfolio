import React from 'react';
import './App.scss';

function Icons() {
    return (
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
    );
}

export default Icons;

