import React, { useState } from 'react'
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [toggle, setToggle] = useState();

  const navigate = useNavigate();

  const handleLogout = async() => {
    localStorage.removeItem("id");
    navigate("/");
  }

  return (
    <div className='py-4 px-20 bg-black text-white'>
      <div className='sm:flex hidden justify-between items-center'>
        <Link className='text-3xl font-bold' to="/">
          abstractify.
        </Link>
        <div>
          <ul className='flex gap-20 text-lg items-center'>
            <li onClick={handleLogout} className='cursor-pointer'>Logout</li>
            <Link to="/explore"><li className='py-1 px-2'>Explore</li></Link>
            <Link to="/seed"><li className='bg-purple-500 py-1 px-3 rounded-e-2xl rounded-s-md'>Seed</li></Link>
          </ul>
        </div>
      </div>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='img' className='w-[28px] h-[28px]' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-black absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
          <ul className='list-none flex flex-col items-center gap-7'>
            <li>Explore</li>
            <li>Seed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
