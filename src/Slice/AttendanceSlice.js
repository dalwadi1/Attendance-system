// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Attendance: []
};

const userSlice = createSlice({
    name: 'AttendanceRecord',
    initialState: [],
    reducers: {
        Attendance: (state, action) => {
            state.status = 'succeeded';
            state.record = action.payload;
        },
    },
});

export const { Attendance } = userSlice.actions;

export default userSlice.reducer;
