// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        },
    },
});

export const { loginSuccess } = userSlice.actions;

export default userSlice.reducer;
