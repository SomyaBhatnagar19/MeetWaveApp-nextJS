import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialMeetups: [
    {
        id: 1,
        name: 'Web Development Meetup',
        time: 'Monday, 7:00 PM',
        address: '123 Main St, City, Country',
        image: 'https://example.com/meetup1.jpg',
      },
      {
        id: 2,
        name: 'Design Workshop',
        time: 'Wednesday, 6:30 PM',
        address: '456 Elm St, City, Country',
        image: 'https://example.com/meetup2.jpg',
      },
      {
        id: 3,
        name: 'Tech Conference',
        time: 'Friday, 9:00 AM',
        address: '789 Oak St, City, Country',
        image: 'https://example.com/meetup3.jpg',
      },
      {
        id: 4,
        name: 'Data Science Seminar',
        time: 'Saturday, 2:00 PM',
        address: '101 Elm St, City, Country',
        image: 'https://example.com/meetup4.jpg',
      },
      {
        id: 5,
        name: 'Startup Networking Event',
        time: 'Tuesday, 5:30 PM',
        address: '567 Pine St, City, Country',
        image: 'https://example.com/meetup5.jpg',
      },
      {
        id: 6,
        name: 'Art Gallery Opening',
        time: 'Thursday, 7:30 PM',
        address: '222 Oak St, City, Country',
        image: 'https://example.com/meetup6.jpg',
      },
      {
        id: 7,
        name: 'New Meetup 1',
        time: 'Monday, 6:00 PM',
        address: '111 Elm St, City, Country',
        image: 'https://example.com/meetup7.jpg',
      },
      {
        id: 8,
        name: 'Web Design Workshop',
        time: 'Wednesday, 5:00 PM',
        address: '789 Oak St, City, Country',
        image: 'https://example.com/meetup8.jpg',
      },
 
  ],
};

const meetupsDataSlice = createSlice({
  name: 'meetups',
  initialState,
  reducers: {
    addMeetup: (state, action) => {
      return {
        ...state,
        initialMeetups: [...state.initialMeetups, action.payload],
      };
    },
    showAllMeetups: (state) => {
      return {...state, initialMeetups: [...state.initialMeetups]};
    },
  },
});

export const { addMeetup, showAllMeetups } = meetupsDataSlice.actions;

export default meetupsDataSlice.reducer;
