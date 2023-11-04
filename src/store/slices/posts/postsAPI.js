import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { bigNumbersConvertor } from "../../../helpers/convertors";
import { syncTimeOut } from "../../../helpers/featchers";


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const { data: postsData } = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const { data: commentsData } = await axios.get('https://jsonplaceholder.typicode.com/comments')
        // likesCount: '1,200',
        // timeAgo: '2 Minutes Ago'
        // comments

        const data = postsData.map(post => ({
            id: post.id.toString(),
            img: post.url,
            name: post.title.split(' ')[0],
            postText: post.title.split(' ').slice(1).join(' '),
            likesCount: bigNumbersConvertor(Math.round(Math.random() * 800 + 700)),
            timeAgo: `${Math.round(Math.random() * 7 + 2)} Minutes Ago`,
            comments: commentsData.filter(comment => comment.postId === post.id)
                                    .map(comment => ({
                                        id: comment.id.toString(),
                                        postId: comment.postId.toString(),
                                        username: comment.email.split('@')[0].toLowerCase(),
                                        body: comment.body
                                    }))
        }))

        syncTimeOut(3000)

        return data
    }
)