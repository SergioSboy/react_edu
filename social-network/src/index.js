import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);


