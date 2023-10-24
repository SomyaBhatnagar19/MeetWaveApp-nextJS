import { useSelector } from "react-redux";
import Link from "next/link";
import { initialMeetups } from "../store/meetupDataSlice/page";

const AllMeetups = () => {
  const meetups = useSelector(initialMeetups); // Use a selector to access meetups from the store

  return (
    <div>
      {meetups.map((data) => (
        <div key={data.id}>
          <img src={data.image} alt={data.name} />
          <div>{data.name}</div>
          <div>{data.time}</div>
          <div>{data.address}</div>
          <div>
            <Link href={`/meetups/${data.id}`}>
              <a className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Show Details
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMeetups;
