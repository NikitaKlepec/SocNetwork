import React from 'react';
import mod from './Header.module.css';

function Header() {
    return (
        <header className={mod.header}>
            <img src='https://stackify.com/wp-content/uploads/2017/08/Javascript-vs-Typescript-793x397.jpg'/>
        </header>

    );
}

export default Header;