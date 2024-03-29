import Link from 'next/link';
import React from 'react';
import TypedText from '../public/vendor/indextyped';





export default function Home() {
  return (
    <div className="h-full bg-fixed font-semibold selection:bg-indigo-300/25">
      <div className="h-screen">
        <div className="p-10 pt-48 grid gap-10 place-content-center text-center">
          <span className="font-bold text-5xl hover:scale-110 transition ease-in-out duration-500">Welcome to Kyaliko</span>
        </div>

        <div className="flex place-content-center text-center items-center">
          <div className="flex place-content-center h-max p-2 backdrop-blur-lg rounded-md bg-white/25 hover:scale-110 transition ease-in-out duration-500">
            <span>
              <span className="flex gap-1">Kyaliko creates <TypedText defer/></span>
            </span>
          </div>
        </div>

        <div className="flex place-content-center p-10 items-center">
          <Link href="about">
            <button className="p-2 w-auto bg-white/25 rounded-md backdrop-blur-lg hover:scale-110 hover:bg-white/10 transition ease-in-out duration-300">
              Click Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
