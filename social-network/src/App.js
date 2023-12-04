import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";


function App(props) {
    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
                        <Route path="/profile/*" element={<Profile posts={props.posts}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
