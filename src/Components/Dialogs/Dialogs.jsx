import React from 'react';
import mod from './Dialogs.module.css';
import DialogItem from "./DilogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/messagesRecucer";


const Dialogs=(props)=> {

    let state=props.messagesPage;

    let messagePost = React.createRef();

    // let aadMessage = () => {
    //     let message = messagePost.current.value;
    //     alert(message)
    // }

    let dialogsElements = state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    )

    let messagesElements =state.messages.map(message =>
        <Message message={message.message} key={message.id}/>
    )

    let newMessageBody=state.newMessageBody;

    let onSendMessageClick=()=>{
        props.sendMessage();
    }

    let onMessageChange=(e)=>{
        let body=e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={mod.dialogs}>
            <div className={mod.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={mod.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onMessageChange} placeholder='Enter text' ref={messagePost}></textarea>
                    </div>
                    <div>
                        <button  onClick={onSendMessageClick}>ADD</button>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Dialogs;