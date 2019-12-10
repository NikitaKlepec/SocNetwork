import React from 'react';
import mod from './Message.module.css';

function Message(props) {
    return (
              <div  className={mod.message}>{props.message}</div>
    );
}

export default Message;