'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [disabledButton, setDisabled] = useState(true);
    const [loginDeets, setLoginDeets] = useState(username, password);


    useEffect(() => {
        if (username.length >= 5 && password.length >= 5) {
            setDisabled(false)
        } else {
        setDisabled(true)
        }
    }, [username, password]);

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const registerUser = () => {

    }
    
    const loginUser = () => {
    
    }

    const disabled = "btn btn-disabled";

    return (
        <div className="flex align-center justify-center mt-100 pt-20">
        <div className="card lg:card-side bg-base-100 shadow-xl w-2/5 mt-100" >
            <figure>
                <Image src='/BBCoolLogo.png' width={100} height={50} alt="logo"/>
            </figure>
            <div className="card-body">
            <div className="flex justify-end px-5">
                    <Link href='/register'>
                        <button className="btn btn-primary">Have an account? Login</button>
                    </Link>
                </div>
               <h2 className="card-title mt-10">Register!</h2>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />  
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                <input type="text" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />    
                    <label className="label">
                        <span className="label-text">Username</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" onChange={updateUsername}/>
                    {/* <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                    </label> */}
                    <label className="label pt-5">
                        <span className="label-text">Password</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" onChange={updatePassword} />
                    {/* <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                    </label> */}
                    <label className="label pt-5">
                        <span className="label-text">Re-Enter Password</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                <input type="password" placeholder="Re-Enter Password" className="input input-bordered w-full max-w-xs" onChange={updatePassword} />
                    {/* <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                    </label> */}
                    <div className="card-actions justify-end pt-5">
                    <div className="flex justify-end px-5">
                </div>
                        <Link href='login'>
                            <button className="btn btn-primary" disabled={disabledButton} onClick={registerUser}>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}