"use client"

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialMeetups: [
    {
        id: 1,
        name: 'Tech Enthusiasts Meetup',
        address: '123 Tech Street, Silicon Valley',
        time: '2023-11-05 15:00:00',
        image: 'https://source.unsplash.com/featured/?technology',
        description: 'Join us for a meetup where we discuss the latest tech trends and innovations in Silicon Valley.',
    },
    {
        id: 2,
        name: 'Art and Creativity Workshop',
        address: '789 Art Avenue, Creative City',
        time: '2023-11-12 14:30:00',
        image: 'https://source.unsplash.com/featured/?art',
        description: 'Express your creativity at our art workshop. All skill levels welcome!',
    },
    {
        id: 3,
        name: 'Healthy Living Seminar',
        address: 'Health Haven, Wellness Center',
        time: '2023-11-15 18:00:00',
        image: 'https://source.unsplash.com/featured/?health',
        description: 'Learn about maintaining a healthy lifestyle at our informative seminar.',
    },
    {
        id: 4,
        name: 'Music Lovers Jam Session',
        address: 'Music Hall, Downtown Jazz District',
        time: '2023-11-18 19:00:00',
        image: 'https://source.unsplash.com/featured/?music',
        description: 'Bring your instruments and join us for a night of music and jamming with fellow enthusiasts.',
    },
    {
        id: 5,
        name: 'Foodies Delight Food Festival',
        address: 'Park Street, Gourmet City',
        time: '2023-11-25 12:00:00',
        image: 'https://source.unsplash.com/featured/?food',
        description: 'Experience a culinary journey with a variety of delectable dishes from around the world.',
    },
    {
        id: 6,
        name: 'Outdoor Adventure Expedition',
        address: 'Wilderness Retreat, Nature Valley',
        time: '2023-12-02 09:00:00',
        image: 'https://source.unsplash.com/featured/?adventure',
        description: 'Embark on an exciting outdoor adventure expedition in the heart of nature.',
    },
]
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