"use client"
import { useSelector } from 'react-redux';
import { initialMeetups } from '../../store/Features/slices/page';

const ShowDetails = ({ params }) => {
  const details = useSelector((state) => state.meetups.initialMeetups);
  const detailsArr = details ? Object.values(details) : [];

  const meetDetails = {};

  detailsArr.forEach((item, index) => {
    meetDetails[index + 1] = {
      image: item.image,
      name: item.name,
      address: item.address,
      time: item.time,
      description: item.description,
    };
  });

  const meet = meetDetails[params.showdetails];

  return (
    <div className="mt-5 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-5">Meetup Details</h1>
      {meet && (
        <div className="m-5">
          <img
            src={meet.image}
            alt={meet.name}
            className="w-full h-80 object-cover object-center"
          />
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{meet.name}</h2>
            <p className="text-gray-600 mb-2">Address: {meet.address}</p>
            <p className="text-gray-600 mb-2">Time: {meet.time}</p>
            <p className="text-gray-600">Description: {meet.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;