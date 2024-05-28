// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        },
        Attendance: (state, action) => {
            state.status = 'succeeded';
            state.record = action.payload;
        },
    },
});

export const { loginSuccess, Attendance } = userSlice.actions;

export default userSlice.reducer;
