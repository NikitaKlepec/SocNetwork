import React from 'react';
import mod from './Dialogs.module.css';
import DialogItem from "./DilogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/messagesRecucer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return  <StoreContext.Consumer>
    {(store)=> {
        let state = store.getState().messagesPage;

        let messagePost = React.createRef();

        let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator())
        }

        let onMessageChange = (body) => {
            store.dispatch(updateNewMessageTextCreator(body))
        }
        return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessageClick} messagesPage={state}/>
    }
    }

    </StoreContext.Consumer>

}

export default DialogsContainer;