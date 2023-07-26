'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [disabledButton, setDisabled] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [loginDeets, setLoginDeets] = useState(username, password);



    useEffect(() => {
        if (username.length >= 5 && password.length >= 5 && name.length >= 1 && email.length >= 5 && passwordCheck === password) {
            setDisabled(false)
        } else {
        setDisabled(true)
        }
    }, [username, password, name, email, passwordCheck]);

    useEffect(() => {
        if (passwordCheck === password && passwordCheck.length > 0 && password.length > 0) {
            setPasswordMatch(true)
        } else {
        setPasswordMatch(false)
        }
    }, [password, passwordCheck]);

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
        
    }

    const updateName = (e) => {
        setName(e.target.value);
    }
    
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePasswordCheck = (e) => {
        setPasswordCheck(e.target.value);
    }
    
    const registerUser = () => {
    
    }

    const disabled = "btn btn-disabled";



    return (
        <div className="flex items-center justify-center pt-10 pb-10">
            <div data-theme="light" className="card lg:card-side bg-base-100 shadow-xl w-[610px] min-w-[300px] overflow-auto" >
                <div className="card-body">
                    <h2 className="card-title mx-auto text-center text-md">Register</h2>
                    <div className='mx-auto'>
                        <Image src='/BBCoolLogo.png' width={100} height={50} alt="logo" className='h-full max-w-none'/>
                    </div>
                    <div className="form-control mt-2 w-full max-w-sm mx-auto text-sm">
                        <label className="label pt-2">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Name" className="input input-bordered w-full" onChange={updateName}/>
                        <label className="label pt-2">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Email" className="input input-bordered w-full" onChange={updateEmail}/>
                        <label className="label pt-2">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter Username" className="input input-bordered w-full" onChange={updateUsername}/>
                        <label className="label pt-2">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="input input-bordered w-full" onChange={updatePassword} />
                        <label className="label pt-2">
                            <span className="label-text">Re-Enter Password</span>
                        </label>
                        <input type="password" placeholder="Re-Enter Password" className="input input-bordered w-full" onChange={updatePasswordCheck} />
                        {passwordMatch ? <p className='mt-2 text-green-500'>Passwords Match!</p> : <p className='mt-2 text-amber-800'>Passwords do not match!</p>}
                        <div className="card-actions justify-center pt-2">
                            <button className="btn btn-primary w-full mt-4" disabled={disabledButton} onClick={registerUser}>Register</button>
                            <div className="divider w-full">OR</div> 
                            <Link href='/login' className='w-full'>
                                <button className="btn btn-primary w-full">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}