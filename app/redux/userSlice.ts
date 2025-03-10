import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { User, Users } from "../types";



const initialState: Users = {
    users: []
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            action.payload.id = nanoid();
            const user = {
                id: action.payload.id,
                name: action.payload.name,
                age: action.payload.age
            }
            state.users.push(user);
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
        editUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex((user) => user.id === action.payload.id)
            state.users[index].name = action.payload.name;
            state.users[index].age = action.payload.age;
        }
    }

})

export const { addUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;