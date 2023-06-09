import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBarNav/SideBarReducer";
import homeReducer from "./home/homeReducer";

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


const store = configureStore({
    reducer: {
        sideBarReducer: sideBarReducer.reducer,
        homeReducer: homeReducer.reducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;