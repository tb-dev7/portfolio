import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import FooterCard from './FooterCard';
import './App.scss';

function App() {
    return (
        <>
            <div className="App">
                <Header /> 
                <Section />
            </div>
            
            <Footer />
        </>
    );
}

export default App;

