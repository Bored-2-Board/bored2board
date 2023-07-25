import React from 'react'

export default function SearchCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        <input type="range" min={1} max="10" value="1" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Get Games</button>
        </div>
      </div>
    </div>
  )
}
