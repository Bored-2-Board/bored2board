import React from 'react';
import Image from 'next/image';

export default function Login() {

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
            <Image src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/>
        </figure>
        <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Franki is giving massiveC u next tuesday.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
    </div>
  )


}