import React from 'react'
import Link from 'next/link'

//line 23 and other nested stuff inside is the main focus container.


const contact = () => {
  return (
    <div className="h-full">
        <div className="pt-48 sm:h-full md:h-screen selection:bg-indigo-300/25">
            <div className="flex place-content-center pb-48">
                <div className="text-5xl  font-bold hover:scale-110 transition ease-in-out duration-500">
                    Projects
                </div>
            </div>



            <div className="flex place-content-center gap-4 text-center pb-10">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 w-[25rem] md:w-[30rem] rounded-md grid md:flex gap-4 items-center font-semibold hover:scale-110 transition ease-in-out duration-300">
                    <div className="grid md:flex place-content-center gap-4">
                        <div className="flex pt-2 md:pt-0 place-content-center">
                            <img className="w-24 rounded-md hover:scale-105 transition ease-in-out duration-300" src="https://avatars.githubusercontent.com/u/101818213?s=400&u=1be6149633a307b15871cb3e626de0a819054b04&v=4"></img>
                        </div>
                        
                        <div className="grid gap-4 text-center md:text-left">
                            <div className="grid md:flex gap-4 place-content-center md:place-content-between">
                                <span className="font-semibold text-lg">Kyaliko Installer</span>
                                <div className="md:absolute md:right-2">
                                    <Link href="https://github.com/kyaliko/kyalikoinstaller">
                                        <button className="p-1 bg-white bg-opacity-10 rounded-md w-24">Github</button>
                                    </Link>
                                </div>
                                
                            </div>
                            <div className="flex place-content-center md:place-content-start">
                                <span className="text-grey-400 w-auto font-light">An open-source installer sdfsdf dfsdf sdffor programs.</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex place-content-center gap-4 text-center pb-10">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 w-[25rem] md:w-[30rem] rounded-md grid md:flex gap-4 items-center font-semibold hover:scale-110 transition ease-in-out duration-300">
                    <div className="grid md:flex place-content-center gap-4">
                        <div className="flex pt-2 md:pt-0 place-content-center">
                            <img className="w-24 rounded-md hover:scale-105 transition ease-in-out duration-300" src="https://avatars.githubusercontent.com/u/101818213?s=400&u=1be6149633a307b15871cb3e626de0a819054b04&v=4"></img>
                        </div>
                        
                        <div className="grid gap-4 text-center md:text-left">
                            <div className="grid md:flex gap-4 place-content-center md:place-content-between">
                                <span className="font-semibold text-lg">Kyaliko RPC</span>
                                <div className="md:absolute md:right-2">
                                    <Link href="/meow/kyalikorpc">
                                        <button className="p-1 bg-white bg-opacity-10 rounded-md w-24">Info</button>
                                    </Link>
                                </div>
                                
                            </div>
                            <div className="flex place-content-center md:place-content-start">
                                <span className="text-grey-400 w-auto font-light">A Discord RPC changer</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex place-content-center gap-4 text-center pb-48">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 w-[25rem] md:w-[30rem] rounded-md grid md:flex gap-4 items-center font-semibold hover:scale-110 transition ease-in-out duration-300">
                    <div className="grid md:flex place-content-center gap-4">
                        <div className="flex pt-2 md:pt-0 place-content-center">
                            <img className="w-24 rounded-md hover:scale-105 transition ease-in-out duration-300" src="https://avatars.githubusercontent.com/u/101818213?s=400&u=1be6149633a307b15871cb3e626de0a819054b04&v=4"></img>
                        </div>
                        
                        <div className="grid gap-4 text-center place md:text-left">
                            <div className="grid md:flex gap-4 place-content-center md:place-content-between">
                                <div className="divide-x divide-white gap-4">
                                    <span className="font-semibold text-lg pr-2">Kyaliko Launcher</span>
                                    <span className="font-thin text-sm text-gray-700 pl-2">Unreleased</span>
                                </div>
                                
                                <div className="md:absolute md:right-2">
                                    <Link href="https://github.com/kyaliko/kyaliko-launcher">
                                        <button className="p-1 bg-white bg-opacity-10 rounded-md w-24">Github</button>
                                    </Link>
                                </div>
                                
                            </div>
                            <div className="flex place-content-center md:place-content-start">
                                <span className="text-grey-400 w-auto  font-light">A C# Minecraft Launcher.</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            



            <div className="flex place-content-center text-center pb-10">
                <div className="bg-gray-50/10 backdrop-blur-lg p-2 grid gap-2 rounded-md">
                    <span>To promote your own projects here, contact <a className="text-[#ffdbb7] underline-offset-1 decoration-[#ffdbb7] underline" href="https://github.com/hi-doki">support@kyaliko.com</a></span>
                    <span>(=•ω＜=)</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact