import React from 'react';

function Nav() {
    return (
        <div class="App">
            <div class="tabs is-centered">
                <ul>
                    <li class="is-active">
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
        </div>
    );
}

export default Nav;