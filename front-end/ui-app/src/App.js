import './App.css';
import Header from './Header'
import InterfaceQuestion from './InterfaceQuestion';
import React from 'react';

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <Header/>
            <InterfaceQuestion />
        </div>
    );
}
    
export default App;