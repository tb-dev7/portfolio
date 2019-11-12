import React, {useState} from 'react';
import {Modal} from './Modal';


function Icons() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            {showModal && <Modal onClose={() => setShowModal(false)}/>}
            <div class="topright">
                <nav class="level is-mobile">
                    <div class="level-item has-text-centered">
                        <a>
                            <i onClick={() => setShowModal(true)} class="icon ion-md-information-circle"></i>
                        </a>    
                    </div>  
                    <div class="level-item has-text-centered">
                        <a href="https://github.com/tb-dev7/portfolio/">
                            <i class="icon ion-logo-linkedin"></i>
                        </a>
                    </div>
        
                    <div class="level-item has-text-centered">
                        <a href="https://github.com/tb-dev7/">
                            <i class="icon ion-logo-github"></i>
                        </a>
                    </div>

                    
                </nav>
            </div>
        </>    
    );
}

export default Icons;

