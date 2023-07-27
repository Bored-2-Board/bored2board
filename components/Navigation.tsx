"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { restartLoading } from "../src/app/store/SearchResults/searchResultSlice";
import { addLoginStatus } from "../src/app/store/LoggedIn/loginSlice";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = useSelector((state) => state.userResult.name);
  const isLoggedIn = useSelector((state) => state.loginResult.isLoggedIn);

  const [isOpen, setIsOpen] = useState(false);

  const homeOnClick = () => {
    setTimeout(() => {
      dispatch(restartLoading());
    }, 1000);
  };

  const signOut = () => {
    dispatch(addLoginStatus(false));
    router.push("/");
  };

  return (
    <div className="z-20 sticky top-0 flex w-full items-center mt-2 px-2">
      <div className="navbar flex flex-row justify-between bg-base-150 rounded-2xl bg-slate-100 border border-slate-200 ">
        <Link href="/">
          <Image
            src="/BBCoolLogo.png"
            alt="BB-Logo"
            width={400}
            height={100}
            className=" w-[50px] h-full transform scale-[200%] ml-4"
          />
        </Link>
        <div className="absolute w-[97.2vw] justify-center ">
          <Link href="/" className="nav-color" onClick={homeOnClick}>
            <p className="btn btn-ghost nav-color flex items-center text-slate-600 hover:text-slate-950">
              Home
            </p>
          </Link>
          <Link href="/search" className="nav-color">
            <p className="btn btn-ghost nav-color flex items-center text-slate-600 hover:text-slate-950">
              Search
            </p>
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <div className="absolute right-10">
              <Link href="/profile" className="nav-color">
                <p className="btn btn-ghost nav-color flex items-center text-slate-600 hover:text-slate-950 px-10">
                  Hi, {userName}
                </p>
              </Link>
            </div>
          ) : (
            <div className="absolute right-4">
              <Link href="/login" className="nav-color ">
                <p className="btn btn-ghost nav-color flex items-center text-slate-600 hover:text-slate-950">
                  Login
                </p>
              </Link>
            </div>
          )}
        </div>
        <div className="dropdown dropdown-end">
          {isLoggedIn ? (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-10 rounded-full">
                <Image
                  id="profile-image"
                  src="/taylor.jpeg"
                  alt="taylor"
                  width={200}
                  height={1}
                />
              </div>
            </label>
          ) : (
            <div></div>
          )}

          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 nav-color border border-slate-400"
            >
              <li>
                <Link
                  className="justify-between"
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                >
                  <p className="flex items-center text-slate-600">Profile</p>
                </Link>
              </li>
              <li>
                <Link
                  className="justify-between"
                  href="/wishlist"
                  onClick={() => setIsOpen(false)}
                >
                  <p className="flex items-center text-slate-600">Wishlist</p>
                </Link>
              </li>
              <li>
                <p
                  className="flex items-center text-slate-600"
                  onClick={() => {
                    setIsOpen(false);
                    signOut();
                  }}
                >
                  Log Out
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
