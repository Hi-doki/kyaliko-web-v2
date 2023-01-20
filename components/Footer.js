import React from 'react'
import Head from 'next/head'

const Footer = () => {
  return (
    <div className="w-screen flex z-50 place-content-center">
        <div className=" transition ease-in-out duration-300 z-50 flex fixed place-content-center p-2 items-center font-mono text-[#ffdbb7] backdrop-brightness-110 scale-75 backdrop-blur-lg font-normal bottom-5 rounded-lg hover:scale-90">
            ©️ Kyaliko 2023
        </div>
    </div>
  )
}

export default Footer