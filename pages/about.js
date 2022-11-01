import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div className=" h-full selection:bg-indigo-300/25 overflow-x-hidden">
        <Navbar></Navbar>
        <div className="h-screen worky">
            
            <div className="flex gap-y-40 place-content-center text-center items-center pt-48">
                <div className="grid grid-cols-1 place-content-center pb-48">
                    <div className="text-5xl  font-bold hover:scale-110 transition ease-in-out duration-500">
                        About
                    </div>
                </div>
            </div>
            <div className="flex place-content-center text-center pb-10">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 grid gap-2 rounded-md w-1/2">
                    <span>Kyaliko is a dev team created by <a className="text-[#ffdbb7] underline-offset-1 decoration-[#ffdbb7] underline" href="https://github.com/hi-doki">Kyatto</a> and <a className="text-[#ffdbb7] underline-offset-1 decoration-[#ffdbb7] underline" href="https://github.com/astromal">Astromal</a></span>
                    <span>Kyaliko creates open-source .NET applications for people to learn how to code easily, instead of looking at a 5 hour video/documentation.</span>
                    <span>(=•ω＜=)</span>
                </div>
            </div>
            <div id="team section" className="place-content-center grid ">
                <div className="text-3xl text-center flex font-bold hover:scale-110 p-10 transition ease-in-out duration-500">ppl</div>
            </div>
            <div className="md:flex grid items-center text-center gap-4 place-content-center pb-10">
                    <div className="bg-gray-50/10 place-content-center backdrop-blur-lg p-2 w-56 rounded-md flex gap-4 items-center font-semibold hover:scale-110 transition ease-in-out duration-300">
                        <img src="https://cdn.discordapp.com/avatars/828795326878056459/be1e0f5c15292e8186e91d91623a2142.png?size=2048" className="w-14 rounded-full" />
                        Kyatto
                    </div>
                    <div className="bg-gray-50/10 place-content-center backdrop-blur-lg p-2 w-56 rounded-md flex gap-4 items-center font-semibold hover:scale-110 transition ease-in-out duration-300">
                        <img src="https://cdn.discordapp.com/avatars/500392354105131009/fe4fce34e7b66c72492bce68c31418a2.png?size=2048" className="w-14 rounded-full" />
                        Astromal
                    </div>
                    <div className="bg-gray-50/10 place-content-center backdrop-blur-lg p-2 w-56 rounded-md flex gap-4 items-center font-semibold hover:scale-110 transition ease-in-out duration-300">
                        <img src="https://cdn.discordapp.com/attachments/879870252333273158/1034947681728077824/7dccff81128b7a4e933a8a3e6e849503.jpg" className="w-14 rounded-full" />
                        Harmanpreet
                    </div>
                </div>
            </div>

            <div className="fixed bottom-2 right-2 items-center w-screen animate-bounce">
                <div className="flex place-content-end font-semibold text-sm text-[#FFFFFF03]">
                    meow
                </div>
            </div>
        
        <Footer></Footer>
    </div>
  )
}

export default about