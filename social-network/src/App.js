import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={
                                   <DialogsContainer
                                       store={props.store}
                                   />}
                        />
                        <Route path="/profile/*"
                               element={
                                   <Profile
                                       store={props.store}
                                   />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
