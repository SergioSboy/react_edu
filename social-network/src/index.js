import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state);
});


