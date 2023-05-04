import { configureStore } from '@reduxjs/toolkit'
import gameReducer from "../Game/slice";
import ProgressReducer from "../MyProgress/slice";
import { combineReducers } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    game: gameReducer,
    progress: ProgressReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["progress"],
};



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST"],
        },
    }),
});

