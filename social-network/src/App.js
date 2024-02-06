import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import {updateNewPostText} from "./redux/state";



function App(props) {
    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
