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
                    <img src="https://cdn.discordapp.com/avatars/500392354105131009/fe4fce34e7b66c72492bce68c31418a2.png?size=2048" className="w-12 rounded-full" />
                    <div>
                        <span>astromal<span className="text-[#ffdbb7]">#2722</span></span>
                    </div>
                </div>
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 rounded-md flex gap-4 items-center font-semibold hover:scale-110 transition ease-in-out duration-300">
                    <img src="https://cdn.discordapp.com/avatars/828795326878056459/be1e0f5c15292e8186e91d91623a2142.png?size=2048" className="w-12 rounded-full" />
                    <div>
                        <span>kyatto<span className="text-[#ffdbb7]">#2671</span></span>
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