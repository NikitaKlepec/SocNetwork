import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../Images/AvatarcaAnonim.webp';

    class Users extends React.Component {
        constructor(props) {
            super(props)
             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                            this.props.setUsers(response.data.items)
                        }
                    )
                }


            render()
            {
                return <div>
                    <button onClick={this.getUsers}>GetUsers</button>
                    {this.props.users.map(u => <div key={u.id}>
                <span>
        <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo}/>
        </div>
        <div>
            {u.followed ?
                <button onClick={() => {
                    this.props.unfollow(u.id)
                }}>UnFollow</button>
                : <button onClick={() => {
                    this.props.follow(u.id)
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
                    </div>)}
                </div>
            }
        }


export default Users;