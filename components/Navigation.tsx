'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { restartLoading } from '../src/app/store/SearchResults/searchResultSlice'
export default function Navigation() {
  const dispatch = useDispatch();

  const homeOnClick = () => {
    setTimeout(() => {
      dispatch(restartLoading());
    }, 1000)
  }
  
  // taken  off of nav bar- md:px-8 py-2 px-4 

  return (
    <div className="z-20 sticky top-0 flex w-full items-center justify-between mt-2 px-2">
      <div className="navbar bg-base-150 rounded-2xl bg-slate-100 border border-slate-200">
        <Link href='/'>
        {/* TODO: add logo here */}
          <Image src='/BBCoolLogo.png' alt='BB-Logo' width={400} height={100} className=" w-[50px] h-full transform scale-[200%] ml-4"/>
        </Link>
        <div className='md:flex hidden w-full justify-center ml-[6%]'>
          <Link href='/' className='nav-color' onClick={homeOnClick}>
            <p className='btn btn-ghost nav-color flex items-center text-slate-600 hover:text-slate-950'>Home</p>
          </Link>
          <Link href='/search' className='nav-color'>
            <p className='btn btn-ghost nav-color flex items-center text-slate-600 hover:text-slate-950'>Search</p>
          </Link>
        </div>

        <Link href='/login' className='nav-color'>
          <p className='btn btn-ghost nav-color flex items-center text-slate-600 hover:text-slate-950'>Login</p>
        </Link>

        {/* if logged in, show profile dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* get profile picture */}
              <Image id='profile-image' src="/taylor.jpeg" alt='taylor' width={200} height={1}/>
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



  )
};
