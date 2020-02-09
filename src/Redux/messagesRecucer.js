const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialstate = {
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

const messagesReducer = (state = initialstate, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{id:6, message: body}]
        }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default messagesReducer;
