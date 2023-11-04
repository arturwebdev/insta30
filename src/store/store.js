import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts/postsSlice";
import getPostsMiddlewares from "./middlewares/posts";
import { usersReducer } from "./slices/users/usersSlice";
import { searchReducer } from "./slices/search/searchSlice";
import getSearchMiddlewares from "./middlewares/search";
import { messagesReducer } from "./slices/messages/messagesSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    search: searchReducer,
    messages: messagesReducer
})

const persistConfig = {
    key: 'insta30',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlewares) => [
        ...getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        ...getPostsMiddlewares(),
        ...getSearchMiddlewares()
    ]
})

export default store

export const persistor = persistStore(store)