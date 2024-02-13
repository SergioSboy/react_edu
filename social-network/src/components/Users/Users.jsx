import React from "react";
import MyButton from "../MyButton/MyButton";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });


        }
    }
    return <div>
        <MyButton name={'Get Users'} onClick={getUsers}></MyButton>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img
                        src={u.photos.small !== null
                            ? u.photos.small
                            : userPhoto
                        }
                        className={classes.userPhoto}
                        alt="User image"/>
                </div>
                <div>
                    {u.followed
                        ? <MyButton onClick={() => props.unfollow(u.id)} name={'Unfollow'}/>
                        : <MyButton onClick={() => props.follow(u.id)} name={'Follow'}/>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)}
    </div>
};

export default Users;