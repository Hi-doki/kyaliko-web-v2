import React from 'react'
import Head from 'next/head'

const Footer = () => {
  return (
    <div className="w-screen flex place-content-center">
      <Head>
        <title>Kyaliko</title>
        <meta name="Kyaliko" content="nya" />
        <meta name="description" content="Kyaliko is a dev team that creates .NET Applications for people that are learning to code :3" />
        <meta property="og:title" content="Kyaliko" />
        <meta property="og:description" content="Kyaliko is a dev team that creates .NET Applications for people that are learning to code :3" />
      </Head>
        <div className=" transition ease-in-out duration-300 flex fixed place-content-center p-2 items-center font-mono text-[#ffdbb7] backdrop-brightness-110 scale-75 backdrop-blur-lg font-normal bottom-5 rounded-lg hover:scale-90">
            ©️ Kyaliko 2022
        </div>
    </div>
  )
}

export default Footer