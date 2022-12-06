import React from 'react'
import Link from 'next/link'
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
                    <div className="flex gap-4">
                        <img className="w-24 rounded-md hover:scale-110 transition ease-in-out duration-300" src="https://avatars.githubusercontent.com/u/101818213?s=400&u=1be6149633a307b15871cb3e626de0a819054b04&v=4"></img>
                        <div className="grid gap-4 text-left">
                            <div className="flex gap-4">
                                <span className="font-semibold text-lg">Kyaliko Installer</span>
                                <div className="flex place-content-end">
                                    <Link href="https://github.com/kyaliko/kyalikoinstaller">
                                        <button className="p-1 bg-white bg-opacity-10 rounded-md w-24">Click</button>
                                    </Link>
                                </div>
                                
                            </div>
                            
                            <span className="text-grey-400 font-light">An open-source installer for all types of programs.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex place-content-center text-center pb-10">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 grid gap-2 rounded-md">
                    <span>just coded this in class <br /> <a className="text-[#ffdbb7] underline-offset-1 decoration-[#ffdbb7] underline" href="https://github.com/hi-doki">support@kyaliko.com</a></span>
                    <span>(=•ω＜=)</span>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default contact