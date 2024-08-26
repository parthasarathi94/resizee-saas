import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (


        <nav className=" backdrop-blur-xl fixed w-full z-20 top-0 start-0 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="https://flowbite.com/docs/images/logo.svg" width={40} height={100} className="h-8" alt="Flowbite Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Resizee</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="/sign-in"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button></a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
