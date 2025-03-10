import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const userStore = configureStore({
    reducer: {
        users: userReducer,
    },
})

export type RootState = ReturnType<typeof userStore.getState>

export type AppDispatch = typeof userStore.dispatch