import React from 'react'
import Navbar from '../components/Navbar'

const about = () => {
  return (
    <div className="bg-fixed uwu h-full selection:bg-indigo-300/25">
        <div className="h-screen">
            <Navbar></Navbar>
            <div className="flex gap-y-40 place-content-center text-center items-center pt-48">
                <div className="grid grid-cols-1 place-content-center pb-48">
                    <div className="text-5xl  font-bold hover:scale-110 transition ease-in-out duration-500">
                        About
                    </div>
                </div>
            </div>
            <div className="flex place-content-center text-center">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 grid gap-2 rounded-md w-1/2">
                    <span>Kyaliko is a dev team created by <a className="text-[#ffdbb7] underline-offset-1 decoration-[#ffdbb7] underline" href="https://github.com/hi-doki">Kyatto</a> and <a className="text-[#ffdbb7] underline-offset-1 decoration-[#ffdbb7] underline" href="https://github.com/astromal">Astromal</a></span>
                    <span>Kyaliko creates open-source .NET applications for people to learn how to code easily, instead of looking at a 5 hour video/documentation.</span>
                    <span>(=•ω＜=)</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about