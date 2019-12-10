import React from 'react';
import mod from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path="/dialogs/"+props.id
    return (
        <div className={mod.dialog}>
            <NavLink to={path} activeClassName={mod.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;