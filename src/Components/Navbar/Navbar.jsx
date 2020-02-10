import React from 'react';
import {NavLink} from "react-router-dom";
import mod from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={mod.nav}>
            <div className={mod.item}>
                <NavLink to="/profile" activeClassName={mod.activeLink}>Profile</NavLink>
            </div>
            <div className={mod.item}>
                <NavLink to="/dialogs" activeClassName={mod.activeLink}>Messages</NavLink>
            </div>
            <div className={mod.item}>
                <NavLink to="/users" activeClassName={mod.activeLink}>Users</NavLink>
            </div>
            <div className={mod.item}>
                <NavLink to="/news" activeClassName={mod.activeLink}>News</NavLink>
            </div>
            <div className={mod.item}>
                <NavLink to="/musik" activeClassName={mod.activeLink}>Musik</NavLink>
            </div>
            <div className={mod.item}>
                <NavLink to="/setting" activeClassName={mod.activeLink}>Settings</NavLink>
            </div>
        </nav>

    );
}

export default Navbar;