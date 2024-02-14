import React from "react";
import MyButton from "../MyButton/MyButton";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });

    }

    render() {
        return <div>

            {this.props.users.map(u => <div key={u.id}>
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
                        ? <MyButton onClick={() => this.props.unfollow(u.id)} name={'Unfollow'}/>
                        : <MyButton onClick={() => this.props.follow(u.id)} name={'Follow'}/>}

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
    }
}

export default Users