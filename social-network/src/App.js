import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            {/*<Profile />*/}
            <div className='app-wrapper-content'>
                <Profile />
            </div>

        </div>
    );
}

export default App;
