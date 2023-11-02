import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import { connectionStr } from "../library/db";
import { meetupData } from "../library/meetupsSchema/meetup";


export async function GET() {

  const connectionStr = "mongodb+srv://somyabhatnagar98:Meetup123@cluster0.dnlovqf.mongodb.net/MeetupCollections?retryWrites=true&w=majority"

  await mongoose.connect(connectionStr);
  const data = await meetupData.find();
  console.log("In the Route.js GET request has given this : ",data);
  return NextResponse.json(data);
}

export async function POST(request) {
  const connectionStr = "mongodb+srv://somyabhatnagar98:Meetup123@cluster0.dnlovqf.mongodb.net/MeetupCollections?retryWrites=true&w=majority"
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  const postData = new meetupData(payload);
  const result = await postData.save();
  console.log("In the Route.js POST request has given this : ",result);
  return NextResponse.json(result);
}