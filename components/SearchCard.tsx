import React from 'react'

export default function SearchCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
          <p>How many players do you have?</p>
        <input type="range" min={1} max="10" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>

        {/* <div>
          <p>What genres are you interested in?</p>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Who shot first?</option>
            <option>Han Solo</option>
            <option>Anyone</option>
          </select>
        </div> */}


        <div className="card-actions justify-end">
        <button className="btn btn-primary">Get Games</button>
        </div>
      </div>
    </div>
  )
}
