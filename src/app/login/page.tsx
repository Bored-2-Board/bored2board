"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLoginStatus } from "../store/LoggedIn/loginSlice";
import { updateData } from "../store/UserData/userDataSlice";
import { useRouter } from 'next/navigation'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // this is the state to know wether or not the style should be active or disabled
  const [disabledButton, setDisabled] = useState(true);

  // this is state that will be set to true if there is a error returned from the server during an attempted sign-in
  const [error, setError] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  // idk
  const isLoggedIn = useSelector((state) => state.loginResult.isLoggedIn);


  // this will update the style of the sign in button if both username and pass are over 5 characters 
  useEffect(() => {
    if (username.length >= 5 && password.length >= 5) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, password]);


  // Basic onChange functions that update state depending on the appropriate fields 
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async () => {
    try {
      
      // send backend the user and password
      // check if its valid
      console.log(username, password)
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      };

      const data = await fetch("/api/auth/signin", settings);
      const response = await data.json();

        // if the sign in is a sucess we will make sure the error state is false, update the redux store with all the user info and set the signed in status to true
        // we will also force the client to the home page
      if (response.message === 'Success!') {
        setError(false);
        dispatch(addLoginStatus(true));
        dispatch(updateData({name: response.name, email: response.email, id: response.userID, username: username})); // or grab it from state ^
        router.push("/");
      } else {
        // if sign in failed we will reset the fields and set our error state to true so that they get some feedback
        console.log('hit else block')
        setError(true);
        setUsername("");
        setPassword("");
      }
    } catch (e) {
      console.log('hit catch block')

      setError(true);
      setUsername("");
      setPassword("");
    }
  };

  // this is a button style
  const disabled = "btn btn-disabled";

  // return statement 
  return (
    <div className="flex items-center justify-center mt-[2%] pt-10 pb-10">
      <div
        data-theme="light"
        className="card lg:card-side bg-base-100 shadow-xl w-2/5 mt-100 min-w-[500px]"
      >
        <div className="card-body">
          <h2 className="card-title mx-auto text-center">Login</h2>
          <div className="mx-auto">
            <Image
              src="/BBCoolLogo.png"
              width={100}
              height={50}
              alt="logo"
              className="h-full max-w-none"
            />
          </div>
          <div className="form-control mt-2 w-full max-w-xs mx-auto">
            <form
              onSubmit={(event) => {
                // this prevents reload on submit 
                event.preventDefault();
              }}
            >
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                value={username}
                placeholder="Enter Username Here"
                className="input input-bordered w-full max-w-xs"
                onChange={updateUsername}
                autoComplete="username"
              />
              <label className="label pt-5">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                placeholder="Enter Password Here"
                className="input input-bordered w-full max-w-xs"
                onChange={updatePassword}
                autoComplete="current-password"
              />
              <div className="card-actions justify-center pt-[40px]">
                <div
                  className={`${
                    !error ? "hidden" : "flex justify-center text-red-600 "
                  }`}
                >
                  Incorrect username or password.
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={disabledButton}
                  onClick={loginUser}
                >
                  Login
                </button>
                <div className="divider w-full">OR</div>
                <Link href="/register" className="w-full">
                  <button className="btn btn-primary w-full">Register</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
