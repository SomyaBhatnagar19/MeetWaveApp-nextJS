// import { useSelector } from 'react-redux';
// import Link from 'next/link';
// import { initialMeetups } from '../store/Features/slices/page'; // Ensure this path is correct

// const AllMeetUps = () => {
//   const meetups = useSelector((state) => state.page.initialMeetups); // Use the correct state path

//   return (
//     <div>
//       {meetups.map((meetup) => (
//         <div key={meetup.id}>
//           <img
//             src={meetup.image}
//             alt={meetup.name}
//             style={{ height: '15rem', objectFit: 'cover' }}
//           />
//           <div>
//             <div>{meetup.name}</div>
//             <div>Address: {meetup.address}</div>
//             <div>Time: {meetup.time}</div>
//             <Link href={`/all-meetups/${meetup.id}`}>
//               <a className="bg-orange-500 border-orange-500 hover:bg-orange-700 hover:border-orange-700 text-white p-2 rounded-lg">
//                 Show Details
//               </a>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllMeetUps;

"use client"
import { useSelector } from 'react-redux';
import { initialMeetups } from '../store/Features/slices/page';
import Link from 'next/link';


const AllMeetUps = () => {
  const meet = useSelector((state) => state.meetups.initialMeetups);
  const meetups = meet ? Object.values(meet) : [];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {meetups.map((meetup) => (
          <div key={meetup.id} className="bg-white rounded-lg shadow-lg">
            <img
              src={meetup.image}
              alt={meetup.name}
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{meetup.name}</h2>
              <p className="text-gray-600 mb-2">Address: {meetup.address}</p>
              <p className="text-gray-600">Time: {meetup.time}</p>
              <Link href={`/all-meetups/${meetup.id}`}>
                <a className="block mt-4 p-2 bg-orange-500 border border-orange-500 rounded-lg text-white text-center hover:bg-orange-700 hover:border-orange-700">
                  Show Details
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMeetUps;
