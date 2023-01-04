import React from 'react'
import Link from 'next/link'

const kyalikorpc = () => {
  return (
    <div className="flex place-content-center pt-48">
      <div id="title stuff" className="w-5/6 bg-gray-50/10 backdrop-blur-md rounded-md p-2">
        <div className="flex gap-2 items-center">
          <img src="../main.png" className="w-16 md:w-20"></img>
          <div className="font-bold text-[1.5rem] md:text-[1.5rem]">Kyaliko RPC</div>
          <div className="md:absolute md:right-4">
            <Link href="https://github.com/kyaliko/kyaliko-rpc/">
              <button className="p-1 bg-white/10 rounded-md w-24">GitHub</button>
            </Link>
          </div>
        </div>
        <div id="Main" className="p-2 gap-4 grid md:grid-cols-2">
          <div id="image">
            <img src="../rpctest.png" className="md:w-[1000px] rounded-md"></img>
          </div>
          <div className=""><span className="font-semibold text-lg">About</span> <br/> Kyaliko RPC is a Discord rich presence changer to allow people to have a weird af status. <br/>This program has Discords dev portal built-in so you dont have to go onto a web browser :3 <br/> <br/>
            <span className="font-semibold text-lg">Features</span> <br/>
            <a className="text-sm">The programs includes: Changing ClientIDs instead of restarting the app to change it (alot of rpc programs are like that ;-;), Changing Details, State, LargeKey, LargeText, SmallKey, Actually allowing people to put SmallText </a>
            <div className="text-[#ffdbb7] gap-4 pt-8">
              This project is still currently in development, changes to UI, features and other stuff is expected within the next few months. Next update I will also add a pre-compiled version that will be released to the Releases page on the Kyaliko-RPC repository
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default kyalikorpc