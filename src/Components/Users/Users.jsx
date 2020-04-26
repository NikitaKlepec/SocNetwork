import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../Images/AvatarcaAnonim.webp";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
        <div>
            <NavLink to={'/profile' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo}/>
            </NavLink>
        </div>
        <div>
            {u.followed ?

                <button disabled={props.followingInProgress.some(id=>u===u.id)} onClick={() => {

                    props.toggleFollowingProgress(true,u.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {withCredentials: true, headers: {"API-KEY": "2c75604d-8690-4dce-af63-4f2e1f4b5f49"}})
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.unFollow(u.id);
                            }
                            props.toggleFollowingProgress(false,u.id);
                        });
                }}>unFollow</button>
                : <button disabled={props.followingInProgress.some(id=>u===u.id)} onClick={() => {

                    props.toggleFollowingProgress(true,u.id);
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                        {withCredentials: true, headers: {'API-KEY': '2c75604d-8690-4dce-af63-4f2e1f4b5f49'}})
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.follow(u.id);
                            }
                            props.toggleFollowingProgress(false,u.id);
                        })
                }}>Follow</button>}

        </div>
                </span>

                <span>
            <div>
                {u.name}
                </div>
            <div>
                {u.status}
            </div>
        </span>
                <span>
                {"u.location.country"}
            </span>
                <span>
                {"u.location.city"}
            </span>
            </div>)
        }
    </div>
}

export default Users;