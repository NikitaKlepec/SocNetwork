import React from 'react';
import mod from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={mod.nav}>
            <div className={mod.item}>
                <a>Profile</a>
            </div>
            <div className={mod.item}>
                <a>Messages</a>
            </div>
            <div className={mod.item}>
                <a>News</a>
            </div>
            <div className={mod.item}>
                <a>Musik</a>
            </div>
            <div className={mod.item}>
                <a>Settings</a>
            </div>
        </nav>

    );
}

export default Navbar;