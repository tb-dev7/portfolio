import React from 'react';
import InfoCard from './InfoCard';

export function Modal({onClose}) {
    return (
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <InfoCard />
            </div>
            <button onClick={onClose} class="modal-close is-large" aria-label="close"></button>
        </div>
    )
}