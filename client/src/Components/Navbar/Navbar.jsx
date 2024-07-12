import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
    const [profileShow, setProfileShow] = useState(false)
  return (
    <section className='absolute top-0 left-0 bg-black/50 text-white w-full'>
        <nav className='flex justify-between items-center py-2 px-4 sm:px-20 '>
            <Link to="/" className='font-bold text-xl text-white/90 flex items-center gap-2'>roShan <SlHandbag className='font-bold text-2xl' /> </Link>
            <ul>
                <Link to="/"><span>Home</span></Link>
            </ul>
            <div className='relative'>
                <div className='cursor-pointer bg-stone-200 w-fit p-3 font-xl text-black rounded-full' onClick={() => {setProfileShow(pre => !pre)}}>
                    <FaUserAlt />
                </div>
                <div className={`${profileShow ? "block" : "hidden" } absolute top-[3rem] right-5 bg-white/50 py-2 px-5 flex flex-col`}>
                    <Link to="/user/">Profile</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/admin/login">Login</Link>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar