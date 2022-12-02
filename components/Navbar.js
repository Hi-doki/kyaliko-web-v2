import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-screen z-50 fixed flex place-content-center">
        <div className=" transition ease-in-out duration-300 flex fixed place-content-between p-5 items-center backdrop-brightness-125 scale-95 backdrop-blur-lg w-11/12 top-5 rounded-lg h-16 font-semibold hover:scale-100">
            <div className="overflow-hidden cursor-pointer">
                <Link href="/">
                    <img src="main.png" width="50px" />
                </Link>
                
            </div>
            <div className="flex gap-10">
                <Link href="about">
                   About
                </Link>
                <Link href="contact">
                   Contact
                </Link>
                <Link href="meow">
                   Click
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar