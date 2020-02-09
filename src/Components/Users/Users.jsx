import React from 'react';
import style from './Users.module.css'

let Users = (props) => {
        if (props.users.length === 0) {
        props.setUsers(
           [
                {
                    id: 1,
                    fullName: 'Alexey',
                    followed: true,
                    photoUrl: 'https://st2.depositphotos.com/1000393/11789/i/950/depositphotos_117893952-stock-photo-hacker-with-mask.jpg',
                    status: 'hulk',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    fullName: 'Lexa',
                    followed: true,
                    photoUrl: 'https://st2.depositphotos.com/1000393/11789/i/950/depositphotos_117893952-stock-photo-hacker-with-mask.jpg',
                    status: 'enot',
                    location: {city: 'Moskov', country: 'Russian'}
                },
                {
                    id: 3,
                    fullName: 'Vano',
                    followed: false,
                    photoUrl: 'https://st2.depositphotos.com/1000393/11789/i/950/depositphotos_117893952-stock-photo-hacker-with-mask.jpg',
                    status: 'human',
                    location: {city: 'Minsk', country: 'Englang'}
                }
            ]
        )
    }
        return ( <div>
        {props.users.map(u => <div key={u.id}>
                <span>
        <div>
            <img src={u.photoUrl} className={style.photo}/>
        </div>
        <div>
            {u.followed ?
                <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button>
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

        </div>
                </span>

            <span>
            <div>
                {u.fullName}
                </div>
            <div>
                {u.status}
            </div>
        </span>
            <span>
                {u.location.country}
            </span>
            <span>
                {u.location.city}
            </span>
        </div>)}
    </div>)
}

export default Users;