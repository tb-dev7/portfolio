import React from 'react';

export function PollingPlace({address, name, ward, alderman, alDistrict, mainVoterParking, mainVoterEntrance, accVoterParking, accVoterEntrance}) {
    return (
        <div className="columns is-multiline polling-place">
            <div className="column is-full has-background-black has-text-white are-large">{name}</div>
            <div className="column is-2 has-background-dark has-text-white">Ward  {ward}</div>
            <div className="column is-4 has-background-dark has-text-white">{address}</div>
            <div className="column is-4 has-background-dark has-text-white">Alderman {alderman}</div>
            <div className="column is-2 has-background-dark has-text-white">District  {alDistrict}</div>
            <div className="column is-4 has-background-info has-text-white">Accessibility Voter Parking</div>
            <div className="column is-8 has-background-white has-text-dark">{accVoterParking}</div>
            <div className="column is-4 has-background-info has-text-white">Accessibility Voter Entrance</div>
                       
            <div className="column is-8 has-background-white has-text-dark">{accVoterEntrance}</div>
            <div className="column is-4 has-background-info has-text-white">Main Voter Parking</div>
            <div className="column is-8 has-background-light has-text-dark">{mainVoterParking}</div>
            <div className="column is-4 has-background-info has-text-white">Main Voter Entrance</div>
            <div className="column is-8 has-background-light has-text-dark">{mainVoterEntrance}</div>
            

        </div>
    );
}
