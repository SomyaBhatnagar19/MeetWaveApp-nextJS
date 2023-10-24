import { configureStore } from '@reduxjs/toolkit';
import meetupsReducer from "./meetupDataSlice/page";

const store = configureStore({
    reducer: {
        meetups: meetupsReducer,
    }
})

export default store;