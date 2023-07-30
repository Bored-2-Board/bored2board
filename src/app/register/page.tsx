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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // ^^^^ these are all states we want up to date when there is a change

  // This is the second password state that we need to check if the passwords match
  const [passwordCheck, setPasswordCheck] = useState("");
  // State to check if the button should have a disabled style
  const [disabledButton, setDisabled] = useState(true);
  // We will update this depending on wether or not the two passwords match
  const [passwordMatch, setPasswordMatch] = useState(false);
  // This is an error state that will let users know there is an issue with their register info
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  // this is making sure that all the inputs meet our requirements and will update the style of the button if so
  useEffect(() => {
    if (
      username.length >= 5 &&
      password.length >= 5 &&
      name.length >= 1 &&
      email.length >= 5 &&
      passwordCheck === password
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, password, name, email, passwordCheck]);

  // this is checking if the passwords match
  useEffect(() => {
    if (
      passwordCheck === password &&
      passwordCheck.length > 0 &&
      password.length > 0
    ) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password, passwordCheck]);


  // these are all onChange values to keep our state up to date on each input type
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
//// see comment above ^


// this is one of the functions that get run whenever there is an attempt to register
// their data will be sent to the server to see if everything is ok
  const registerUser = async () => {
    try {
      // send backend the user and password
      // check if its valid
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          username,
          password,
        }),
      };

      const data = await fetch("/api/auth/signup", settings);
      const response = await data.json();
      console.log('entire response', response)
      console.log('response status', response.status)
      // if all of the info checks out, were going to update the redux store with their info, set signed in status to true, and send them to the home page
      if (response.message === 'Success!') {
        setError(false);
        dispatch(addLoginStatus(true));
        dispatch(updateData({name: response.name, email: response.email, id: response.userID, username: username})); // or grab it from state ^
        router.push("/");
      }

// if the server responds with an error, we will reset the input fields and set our error state to true so they get some feedback that something went wrong
    } catch (e) {
      setError(true);
      setUsername("");
      setPassword("");
      setPasswordCheck("");
      setEmail("");
    }
  };

  // disabled button style
  const disabled = "btn btn-disabled";

  // return statement
  // There is a lot of onClick/onChange events that basically just tell us what styles to render
  // lmk if you have more questions
  return (
    <div className="flex items-center justify-center pt-10 pb-10">
      <div
        data-theme="light"
        className="card lg:card-side bg-base-100 shadow-xl w-[610px] min-w-[300px] overflow-auto"
      >
        <div className="card-body">
          <h2 className="card-title mx-auto text-center text-md">Register</h2>
          <div className="mx-auto">
            <Image
              src="/BBCoolLogo.png"
              width={100}
              height={50}
              alt="logo"
              className="h-full max-w-none"
            />
          </div>
          <div className="form-control mt-2 w-full max-w-sm mx-auto text-sm">
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label className="label pt-2">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                placeholder="Enter Name"
                className="input input-bordered w-full"
                onChange={updateName}
              />
              <label className="label pt-2">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={email}
                placeholder="Enter Email"
                className="input input-bordered w-full"
                onChange={updateEmail}
                autoComplete="username"
              />
              <label className="label pt-2">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                value={username}
                placeholder="Enter Username"
                className="input input-bordered w-full"
                onChange={updateUsername}
              />
              <label className="label pt-2">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                className="input input-bordered w-full"
                onChange={updatePassword}
                autoComplete="new-password"
              />
              <label className="label pt-2">
                <span className="label-text">Re-Enter Password</span>
              </label>
              <input
                type="password"
                value={passwordCheck}
                placeholder="Re-Enter Password"
                className="input input-bordered w-full"
                onChange={updatePasswordCheck}
                autoComplete="new-password"
              />
              <div className={`${!password.length ? "hidden" : ""}`}>
                {passwordMatch ? (
                  <p className="mt-2 text-green-500">Passwords Match!</p>
                ) : (
                  <p className="mt-2 text-amber-800">Passwords do not match!</p>
                )}
              </div>
              <div className="card-actions justify-center pt-2">
                <div
                  className={`${
                    !error ? "hidden" : "flex justify-center text-red-600 "
                  }`}
                >
                  Something went wrong, try again
                </div>
                <button
                  className="btn btn-primary w-full mt-4"
                  disabled={disabledButton}
                  onClick={registerUser}
                >
                  Register
                </button>
                <div className="divider w-full">OR</div>
                <Link href="/login" className="w-full">
                  <button className="btn btn-primary w-full">Login</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
