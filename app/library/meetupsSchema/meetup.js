import mongoose from "mongoose";

const meetup = new mongoose.Schema({
    name: String,
    address: String,
    time: String,
    image: String,
    description: String
});

export const meetupData = mongoose.models.MeetupData|| mongoose.model("MeetupData",meetup);

