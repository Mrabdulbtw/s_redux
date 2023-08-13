
import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'user',
    initialState: { value: { name: '', age: '', Email: '' } },
    reducers: {
        Login: (state, action) => {
            state.value = action.payload
        },
        Logout: (state, action) => {
            state.value = { name: '', age: '', Email: '' }
        }
    }
})


export const { Login, Logout } = UserSlice.actions
export const UserReducer = UserSlice.reducer