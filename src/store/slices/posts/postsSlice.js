import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        data: []
    },
    reducers: {
        addComment(state, {payload}){
            const postIdx = state.data.findIndex(post => post.id === payload.postId)

            const newComment = {
                ...payload,
                id: new Date().getTime().toString()
            }

            state.data[postIdx].comments.push(newComment)
        },
        addPost(state, {payload}){
            state.data.unshift(payload)
        },
        delPost(state, {payload}){
            state.data = state.data.filter(post => post.id !== payload)
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.data = payload
        }
    }
})

export const selectPosts = state => state.posts

export const {addComment} = postsSlice.actions

export const postsReducer = postsSlice.reducer