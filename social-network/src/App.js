import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={
                                   <DialogsContainer/>
                               }
                        />
                        <Route path="/profile/:userId?" element={<ProfileContainer />}></Route>

                        <Route path="/users/*"
                               element={
                                   <UsersContainer/>
                               }
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
