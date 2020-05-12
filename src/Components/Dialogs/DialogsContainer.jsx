import React from 'react';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/messagesRecucer";
import Dialogs from "./Dialogs";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//
//     return  <StoreContext.Consumer>
//     {(store)=> {
//         let state = store.getState().messagesPage;
//
//         let messagePost = React.createRef();
//
//         let onSendMessageClick = () => {
//             store.dispatch(sendMessageCreator())
//         }
//
//         let onMessageChange = (body) => {
//             store.dispatch(updateNewMessageTextCreator(body))
//         }
//         return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessageClick} messagesPage={state}/>
//     }
//     }
//
//     </StoreContext.Consumer>
//
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;