import Head from 'next/head'
import Image from 'next/image'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import React from 'react';





export default function Home() {
  return (
    <div className="h-full bg-fixed font-semibold selection:bg-indigo-300/25">
      <Navbar></Navbar>
      <div className="h-screen">
        <div className="p-10 pt-48 grid gap-10 place-content-center">
          <span className="font-bold text-5xl hover:scale-110 transition ease-in-out duration-500">Welcome to Kyaliko</span>
        

        </div>
        <div className="flex place-content-center p-10">
          <Link href="about">
            <button className="p-2 w-auto bg-white/25 rounded-md hover:scale-110 hover:bg-white/10 transition ease-in-out duration-300">
              Click Me
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
