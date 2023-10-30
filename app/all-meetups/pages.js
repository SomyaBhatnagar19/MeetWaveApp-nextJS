"use client"
//all-meetups/page.js
import { useSelector } from 'react-redux';
import { initialMeetups } from '../store/Features/slices/page';
import Link from 'next/link';


const AllMeetUps = () => {

  const meetups = useSelector((state) => state.meetups.initialMeetups);
  
  return (
    <div className="container mx-auto p-4 mt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {meetups.map((meetup) => (
          <div key={meetup.id} className="bg-sky-100 p-2 rounded-lg shadow-lg">
            <img
              src={meetup.image}
              alt={meetup.name}
              className="w-full h-56 object-cover object-center rounded-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{meetup.name}</h2>
              <p className="text-gray-600 mb-2">Address: {meetup.address}</p>
              <p className="text-gray-600">Time: {meetup.time}</p>
              <Link href={`/all-meetups/${meetup.id}`}>
                <div className="block mt-4 p-2 bg-sky-900 border border-sky-700 rounded-lg text-white text-center hover:bg-sky-600 ">
                  Show Details
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMeetUps;
