//importing images
import favicon from "app/favicon.ico";
import Image from 'next/image';
import meetupWaveLogo from '../public/assets/meetup.png';
//link import
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/*----- Header Section -----*/}
      <div className="bg-gradient-to-r from-sky-800 via-sky-600 to-sky-800 p-2 shadow-lg flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={meetupWaveLogo} alt="Logo" width={70} height={70} className="ml-5 rounded-full bg-sky-500 transform transition-transform hover:rotate-45 duration-300"/>
          <h1 className="font-serif font-semibold italic text-2xl text-sky-50">MeetWave</h1>
        </div>
        <div className="space-x-4 font-serif text-md text-white">
          <Link href="/all-meetups" className="italic bg-orange-500 hover:bg-orange-700 p-1 rounded-md shadow-lg">
            Show all Meetups
          </Link>
          <Link href="/add-meetups" className="italic bg-green-600 hover:bg-green-800 p-1 rounded-md shadow-lg">
            Add new Meetups
          </Link>
        </div>
      </div>
    </main>
  );
}
