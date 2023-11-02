"use client"

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialMeetups: []
};

const meetupsSlice = createSlice({
  name: 'meetups',
  initialState,
  reducers: {
    addMeetup: (state, action) => {
      state.initialMeetups.push(action.payload);
    },
    showAllMeetups: (state) => {
      return state;
    },
  },
});

export const { addMeetup, showAllMeetups, initialMeetups } = meetupsSlice.actions;
export default meetupsSlice.reducer;