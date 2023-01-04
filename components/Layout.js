import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head"
import React from "react"

export default function Layout({children}) {
    return (
        <div className="selection:bg-slate-100/25">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    )
}