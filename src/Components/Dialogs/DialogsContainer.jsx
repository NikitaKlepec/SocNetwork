import React from 'react';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/messagesRecucer";
import Dialogs from "./Dialogs";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {Redirect} from "react-router-dom";
import {compose} from "redux";


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

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);