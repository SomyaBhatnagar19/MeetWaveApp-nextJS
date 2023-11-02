"use client"
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addMeetup } from '../store/Features/slices/page';

const AddMeetups = () => {
  const dispatch = useDispatch();

  // Create refs for form input elements
  const meetingNameRef = useRef(null);
  const meetingAddressRef = useRef(null);
  const meetingTimeRef = useRef(null);
  const meetingImageRef = useRef(null);
  const meetingDescriptionRef = useRef(null);

  const clearFormInputs = () => {
    // Clear the form input values using refs
    meetingNameRef.current.value = '';
    meetingAddressRef.current.value = '';
    meetingTimeRef.current.value = '';
    meetingImageRef.current.value = '';
    meetingDescriptionRef.current.value = '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve the form input values using refs
    const newMeetup = {
      id: Date.now(),
      name: meetingNameRef.current.value,
      address: meetingAddressRef.current.value,
      time: meetingTimeRef.current.value,
      image: meetingImageRef.current.value,
      description: meetingDescriptionRef.current.value,
    };

    dispatch(addMeetup(newMeetup));
    console.log('Meetup:', newMeetup);
    clearFormInputs();
  };

  return (
    <div className="bg-slate-300 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-sky-900 text-white text-2xl italic p-4 w-full text-center">
        Add Meetups
      </div>
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-800 font-semibold" htmlFor="meeting-name">
              Meeting Name:
            </label>
            <input
              type="text"
              id="meeting-name"
              name="meetingName"
              ref={meetingNameRef}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-sky-300"
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold" htmlFor="meeting-address">
              Address:
            </label>
            <input
              type="text"
              id="meeting-address"
              name="meetingAddress"
              ref={meetingAddressRef}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-sky-300"
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold" htmlFor="meeting-time">
              Time:
            </label>
            <input
              type="time"
              id="meeting-time"
              name="meetingTime"
              ref={meetingTimeRef}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-sky-300"
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold" htmlFor="image-url">
              Meeting Venue Image URL:
            </label>
            <input
              type="text"
              id="image-url"
              name="meetingImage"
              ref={meetingImageRef}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-sky-300"
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold" htmlFor="meeting-description">
              Description/Agenda of the Meeting:
            </label>
            <input
              type="text"
              id="meeting-description"
              name="meetingDescription"
              ref={meetingDescriptionRef}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-sky-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-900 text-white py-2 px-4 rounded hover-bg-sky-700 focus:outline-none focus-ring focus-ring-sky-300"
          >
            Create Meetup
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMeetups;
