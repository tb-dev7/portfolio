import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Links} from './Links';
import {AlertButton} from './AlertButton';
import {Counter} from './Counter';
import {PollingPlace} from './Polling-Place';
import pollingPlacesRawData from './polling-places.json';


const pollingPlaces = pollingPlacesRawData.elements;
console.log(pollingPlaces);

const myObject = {
    "name":"this name",
    "another property": "property"
};


console.log(myObject.name);
console.log(myObject["name"]);
console.log(myObject["another property"]);



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


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
       
                <Links links={menu} />
                <p>
              Welcome
                </p>
                <div>
                    <AlertButton />
                    <Counter />
            
                </div>   
            </header>
            {
                pollingPlaces.map((pollingplace, index) => {
                    return (
                        <PollingPlace address={pollingplace["Polling Place Address"]} 
                            name={pollingplace["Polling Place Name"]}
                            ward={pollingplace["Ward"]}
                            alderman={pollingplace["Alderman"]}
                            alDistrict={pollingplace["Aldermanic District"]}
                            mainVoterParking={pollingplace["Main Voter Parking"]}
                            mainVoterEntrance={pollingplace["Main Voter Entrance"]}
                            accVoterParking={pollingplace["Accessibility Voter Parking"]}
                            accVoterEntrance={pollingplace["Accessibility Voter Entrance"]}
                            key={index}

              
              
                        />)
                })

            }
            
            
            
            <PollingPlace />
        </div>
    
    );
}

export default App;

