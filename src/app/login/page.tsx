import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Login() {

  return (
    <div className="flex align-center justify-center mt-100 pt-20">
        <div className="card lg:card-side bg-base-100 shadow-xl w-2/3 mt-100" >
            <figure>
                <Image src='/BBCoolLogo.png' width={100} height={50} alt="logo"/>
            </figure>
            <div className="card-body">
               <h2 className="card-title">Register or Login</h2>
                {/* <p>Click the button to listen on Spotiwhy app.</p> */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Username</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                <input type="text" placeholder="Enter Username Here" className="input input-bordered w-full max-w-xs" />
                    {/* <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                    </label> */}
                    <br></br>
                    <label className="label">
                        <span className="label-text">Password</span>
                        {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                <input type="password" placeholder="Enter Password Here" className="input input-bordered w-full max-w-xs" />
                    {/* <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                    </label> */}
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" href="/login">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}