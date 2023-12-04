import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let postsData = [
    {
        id: 1,
        message: 'Hi, how are you?',
        img: 'https://img.freepik.com/premium-vector/avatar-of-a-woman-with-blond-hair-blue-eyes-and-bob-haircut_427567-4265.jpg'
    },
    {
        id: 2,
        message: 'Hey! My name is Andy',
        img: 'https://img.freepik.com/premium-vector/avatar-of-a-woman-with-black-hair-short-hair-face_427567-610.jpg?w=2000'
    },
]
let dialogsData = [
    {id: 1, name: "Misha"},
    {id: 2, name: "Aleksey"},
    {id: 3, name: "Anton"},
    {id: 4, name: "Lioba"},
    {id: 5, name: "Mira"},
    {id: 6, name: "Vadim"},
]
let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you? Welcome my site!'},
    {id: 3, message: 'Iam fine'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

