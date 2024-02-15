import React from "react";
import MyButton from "../MyButton/MyButton";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let slicedPages;
        let curPage = this.props.currentPage;
        if (curPage - 3 < 0) {
            slicedPages = pages.slice(0, 5);
        } else {
            slicedPages = pages.slice(curPage - 3, curPage + 2);
        }

        return <div>

            <div>
                {slicedPages.map(p => {
                    return <span className={this.props.currentPage === p && classes.selectPage}
                    onClick={() => {this.onPageChanged(p)}}>{p}</span>
                })}

            </div>

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