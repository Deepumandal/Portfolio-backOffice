// import { legacy_createStore, compose } from "redux"
// import { applyMiddleware, combineReducers } from "redux"
// import thunk from "redux-thunk"
// import sideBarReducer from "./SideBarNav/SideBarReducers";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { homeReducer } from "./home/homeReducer";



// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// } // this is for redux devtool support

// const rootReducer = combineReducers({
//     sidebar: sideBarReducer,
//     home: homeReducer
// })

// export const store = legacy_createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );


import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBarNav/SideBarReducer";

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


const store = configureStore({
    reducer: {
        sideBarReducer: sideBarReducer.reducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;