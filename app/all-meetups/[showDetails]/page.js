"use client"
//all-meetups/[showDetails]/page.js
import { useSelector } from 'react-redux';
import { initialMeetups } from '../../store/Features/slices/page';

const ShowDetails = ({ params }) => {

  const details = useSelector((state) => state.meetups.initialMeetups);
  console.log('details: ', details)
  const detailsObj = details.find((meetup) => meetup.id == params.showDetails);
  console.log('detailsObj: ', detailsObj)
  console.log("params: ", params.showDetails)
  // Check if detailsArr is defined before accessing its properties
  if (!detailsObj) {
    return <div>Meetup not found.</div>;
  }

  return (
    <div className="mt-5 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-5">Meetup Details</h1>
      <div>
        <img
          src={detailsObj.image}
          alt={detailsObj.name}
          className="w-full h-80 object-cover object-center"
        />
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">{detailsObj.name}</h2>
          <p className="text-gray-600 mb-2">Address: {detailsObj.address}</p>
          <p className="text-gray-600 mb-2">Time: {detailsObj.time}</p>
          <p className="text-gray-600">Description: {detailsObj.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
