import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import withRouter from "./components/Profile/WithRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            return  <Preloader/>
        }
        return (

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
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}></Route>

                            <Route path="/users/*"
                                   element={
                                       <UsersContainer/>
                                   }
                            />
                            <Route path="/login/*"
                                   element={
                                       <Login/>
                                   }
                            />
                        </Routes>
                    </div>
                </div>

        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
