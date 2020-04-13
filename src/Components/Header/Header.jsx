import React from 'react';
import mod from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
        return (
        <header className={mod.header}>
            <img src='https://stackify.com/wp-content/uploads/2017/08/Javascript-vs-Typescript-793x397.jpg'/>
            <div className={mod.loginBlock}>
                {props.isAuth?props.login:<NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>

    );
}

export default Header;