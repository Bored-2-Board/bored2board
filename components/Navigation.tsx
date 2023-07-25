'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function Navigation() {

  return (
    <div className="md:px-8 z-20 fixed top-0 flex w-full items-center py-2 px-4 justify-between">
      <div className="navbar bg-base-100 rounded-3xl nav-color border border-slate-400">
        <Link href='/'>
        {/* TODO: add logo here */}
          <p className="btn btn-ghost normal-case text-xl ml-2 text-slate-600">B2B</p>
        </Link>
        <div className='md:flex hidden w-full h-full items-center justify-center'>
          <Link href='/' className='nav-color'>
            <p className='btn btn-ghost nav-color flex items-center text-slate-600'>Home</p>
          </Link>
          <Link href='/search' className='nav-color'>
            <p className='btn btn-ghost nav-color flex items-center text-slate-600'>Search</p>
          </Link>
        </div>

    <div className=''>
        <Link href='/login' className='nav-color'>
          <p className='btn btn-ghost nav-color flex items-center text-slate-600'>Login</p>
        </Link>

        {/* if logged in, show profile dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* get profile picture */}
              <Image src="/jordangay.png" alt='cute jordan' width={2} height={2}/>
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 nav-color border border-slate-400">
            <li>
              <Link className="justify-between" href='/profile'>
                <p className='flex items-center text-slate-600'>Profile</p>
              </Link>
            </li>
            <li>
              <Link className="justify-between" href='/saved'>
                <p className='flex items-center text-slate-600'>Saved</p>
              </Link>
            </li>
            <li>
              <Link className="justify-between" href='/login'>
                <p className='flex items-center text-slate-600'>Log Out</p>
              </Link>
            </li>
          </ul>
        </div>
        </div>
    </div>
   </div>



  )
};
