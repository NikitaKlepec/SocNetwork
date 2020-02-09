import profileReducer from "./profileRecucer";
import messagesReducer from "./messagesRecucer";

const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hou du yu now", like: "12", dislike: "10"},
                {id: 2, message: "Klfdfrg", like: "5", dislike: "15"},
                {id: 3, message: "terman kompf", like: "40", dislike: "0"},
            ],
            newPostText: "It-camasutra",
        },

        messagesPage: {
            messages: [
                {id: 1, message: "Oleg ns Yu"},
                {id: 2, message: "Peter"},
                {id: 3, message: "Linkoln"},
                {id: 4, message: "Dfetbbhdf"}

            ],
            dialogs: [
                {id: 1, name: "Oleg"},
                {id: 2, name: "Kolya"},
                {id: 3, name: "Lera"},
                {id: 4, name: "Sergey"}
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);

    }
}
export const addPostActionCreator=()=>({type:ADD_POST});

export const sendMessageCreator=()=>({type:SEND_MESSAGE});

export const updateNewPostTextActionCreator=(text)=>({type:UPDATE_NEW_POST_TEXT, newText:text});

export const updateNewMessageTextCreator=(body)=>({type:UPDATE_NEW_MESSAGE_BODY, body:body});



export default store;
