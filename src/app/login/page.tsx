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


    const loginUser = () => {
    
    }

    const disabled = "btn btn-disabled";


    // <div>
    //             <Image src='/BBCoolLogo.png' width={100} height={50} alt="logo" className='h-full max-w-none'/>
    //         </div>

    return (
        <div className="flex items-center justify-center mt-[2%] pt-10 pb-10">
            
        <div data-theme="light" className="card lg:card-side bg-base-100 shadow-xl w-2/5 mt-100 min-w-[500px]" >

            <div className="card-body">
                <h2 className="card-title mx-auto text-center">Login</h2>
                <div className='mx-auto'>
              <Image src='/BBCoolLogo.png' width={100} height={50} alt="logo" className='h-full max-w-none'/>
                 </div>
                <div className="form-control mt-2 w-full max-w-xs mx-auto">
                    
                    <label className="label">
                        <span className="label-text">Username</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                <input type="text" placeholder="Enter Username Here" className="input input-bordered w-full max-w-xs" onChange={updateUsername}/>
                    {/* <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                    </label> */}
                    <label className="label pt-5">
                        <span className="label-text">Password</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                <input type="password" placeholder="Enter Password Here" className="input input-bordered w-full max-w-xs" onChange={updatePassword} />
                    {/* <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                    </label> */}
                    <div className="card-actions justify-center pt-[40px]">
                        {/* <Link href='/register'>
                        <button className="btn btn-primary" disabled={disabledButton} onClick={registerUser}>Register</button>
                        </Link> */}
                        <button className="btn btn-primary w-full" disabled={disabledButton} onClick={loginUser}>Login</button>
                        <div className="divider w-full">OR</div> 
                        <Link href='/register' className='w-full'>
                        <button className="btn btn-primary w-full">Register</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}