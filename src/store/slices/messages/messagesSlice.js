import { createSlice } from "@reduxjs/toolkit";


const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        activeUserId: '2',
        allMessages: [],
        currentDialog: []
    },
    reducers: {
        toggleActive(state, {payload: {toId, fromId}}) {
            state.activeUserId = toId

            state.currentDialog = state.allMessages.filter(message => message.toId === toId && message.fromId === fromId ||
                                                                      message.fromId === toId && message.toId === fromId)
        },
        addMessage(state, {payload}){
            const message = {
                ...payload,
                body: payload.body || '❤️',
                toId: state.activeUserId,
                id: new Date().getTime().toString()
            }

            state.currentDialog.push(message)
            state.allMessages.push(message)
        },
        resetActive(state){
            state.activeUserId = ''
            state.currentDialog = []
        }
    }
})


export const selectMessages = state => state.messages

export const {toggleActive, addMessage, resetActive} = messagesSlice.actions

export const messagesReducer = messagesSlice.reducer
