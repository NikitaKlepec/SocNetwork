import React from 'react';
import mod from './Dialogs.module.css';
import DialogItem from "./DilogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {

    let messagePost=React.createRef();

    let aadMessage=()=>{
        let message=messagePost.current.value;
        alert(message)
    }

    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )


    let messagesElements = props.state.messages.map(message =>
        <Message message={message.message}/>
    )

    return (
        <div className={mod.dialogs}>
            <div className={mod.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={mod.messages}>
                {messagesElements}
                <textarea ref={messagePost}></textarea>
                <div>
                <button onClick={aadMessage}></button>
                </div>

            </div>

        </div>


    );
}

export default Dialogs;