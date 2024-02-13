import React from "react";
import MyButton from "../MyButton/MyButton";
import classes from './Users.module.css'
const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: true,
                fullName: 'Dmitry',
                status: 'i am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: true,
                fullName: 'Anna',
                status: 'i am a student',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: false,
                fullName: 'John',
                status: 'i am a banker',
                location: {city: 'London', country: 'United Kingdom'}
            },
            {
                id: 4,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: true,
                fullName: 'Maria',
                status: 'i am a doctor',
                location: {city: 'Madrid', country: 'Spain'}
            },
            {
                id: 5,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: false,
                fullName: 'Robert',
                status: 'i am a teacher',
                location: {city: 'Paris', country: 'France'}
            },
            {
                id: 6,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: false,
                fullName: 'Linda',
                status: 'i am a writer',
                location: {city: 'New York', country: 'United States'}
            },
            {
                id: 7,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: false,
                fullName: 'Andrei',
                status: 'i am a programmer',
                location: {city: 'Berlin', country: 'Germany'}
            },
            {
                id: 8,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: true,
                fullName: 'Hiroshi',
                status: 'i am a chef',
                location: {city: 'Tokyo', country: 'Japan'}
            },
            {
                id: 9,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: true,
                fullName: 'Camila',
                status: 'i am a designer',
                location: {city: 'Sao Paulo', country: 'Brazil'}
            },
            {
                id: 10,
                photoURL:'https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=',
                followed: false,
                fullName: 'Vladimir',
                status: 'i am a musician',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ])
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL} className={classes.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <MyButton onClick = {() => props.unfollow(u.id)} name={'Unfollow'}/>
                        : <MyButton onClick = {() => props.follow(u.id)} name={'Follow'}/>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
};

export default Users;