"use client";
const AddMeetups = () => {
  return (
    <div className="bg-slate-300 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-sky-900 text-white text-2xl italic p-4 w-full text-center">Add Meetups</div>
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <form className="space-y-4">
          <div>
            <label className="text-gray-800 font-semibold" htmlFor="meeting-name">
              Meeting Name:
            </label>
            <input
              type="text"
              id="meeting-name"
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
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-sky-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-900 text-white py-2 px-4 rounded hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300"
          >
            Create Meetup
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMeetups;
