import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const contact = () => {
  return (
    <div className="h-full">
        <Navbar></Navbar>
        <div className="pt-48 sm:h-full md:h-screen selection:bg-indigo-300/25">
            <div className="flex place-content-center pb-48">
                <div className="text-5xl  font-bold hover:scale-110 transition ease-in-out duration-500">
                    Contact
                </div>
            </div>
            <div className="flex place-content-center gap-4 text-center pb-48">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 rounded-md flex gap-4 items-center font-semibold hover:scale-110 transition ease-in-out duration-300">
                    <div className="flex divide-x place-content-between justify-center items-center">
                        <div className="flex pr-4">
                            <img src="https://avatars.githubusercontent.com/u/106713009?v=4" className="w-24 rounded-full" />
                        </div>
                        <div className="grid pl-4 gap-y-2">
                            <div className="flex gap-x-2">
                                <img className="w-6" src="./discord-mark-white.svg" /><span>kyatto<span className="text-[#ffdbb7]">#2671</span></span>
                            </div>
                            <div className="flex gap-x-2">
                                <img className="w-6" src="./Logo white.svg" /><span>calico_cl</span>
                            </div>
                            <div className="flex gap-x-2">
                                <img className="w-6" src="./github-mark-white.svg" /><span>hi-doki</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex place-content-center text-center pb-10">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 grid gap-2 rounded-md">
                    <span>You can also email us at <a className="text-[#ffdbb7] underline-offset-1 decoration-[#ffdbb7] underline" href="https://github.com/hi-doki">support@kyaliko.com</a></span>
                    <span>(=•ω＜=)</span>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default contact