import React from 'react';
import mod from './Dialogs.module.css';
import DialogItem from "./DilogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
    // let dialogsData = [
    //     {id: 1, name: "Oleg"},
    //     {id: 2, name: "Kolya"},
    //     {id: 3, name: "Lera"},
    //     {id: 4, name: "Sergey"},
    // ]
    //
    // let messagesData = [
    //     {id: 1, message: "Oleg ns Yu"},
    //     {id: 2, message: "Peter"},
    //     {id: 3, message: "Linkoln"},
    //     {id: 4, message: "Dfetbbhdf"},
    //
    // ]

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

            </div>

        </div>


    );
}

export default Dialogs;