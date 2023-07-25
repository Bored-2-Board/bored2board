'use client';
import React from "react";
import { useState, useEffect } from "react";

export default function SearchCard() {
  const [anything, setAnything] = useState(false);
  const [genre, setGenre] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);



   const changeFree = () => {
    setSelectedButton('free');

    if (selectedButton === 'free') {
      setSelectedButton(null);
    }
  }

  const changeLess = () => {
    setSelectedButton('less');

    if (selectedButton === 'less') {
      setSelectedButton(null);
    }
  }

  const changeMore = () => {
    setSelectedButton('more');

    if (selectedButton === 'more') {
      setSelectedButton(null);
    }
  }

  const changeAnything = () => {
    setAnything(!anything);
  }

  const changeGenre = () => {
    setGenre(!genre);
  }


  const selectedYes = "btn btn-primary min-w-[30%] mx-2"
  const selectedNo = "btn min-w-[30%] mx-2"

  const falseColor = "m-1 btn w-full";
  const trueColor = "m-1 btn btn-primary w-full"

  const dropdownActive = "m-1 btn w-full"
  const dropdownInactive = "m-1 btn btn-primary w-full"

  return (
    <div className="flex absolute card w-96 bg-base-100 shadow-xl">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">Hey!</h2>
        <p>How many players do you have?</p>
        <input type="range" min={1} max="10" className="basic-transition range hover:range-primary" step="1" />
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

        <p>What do you want to play?</p>
        <details className="dropdown">
          <summary className={!genre ? dropdownActive : dropdownInactive} onClick={changeGenre}>Genre</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
        <div className="flex w-[100%] items-center">
        <p>OR</p>
        </div>
          <button className={anything ? trueColor : falseColor} onClick={changeAnything}>ANYTHING</button>
          <p>What's your price point?</p>
          <div className="flex justify-center space-between">
          <button className={selectedButton === 'free' ? selectedYes : selectedNo} onClick={changeFree}>Free</button>
          <button className={selectedButton === 'less' ? selectedYes : selectedNo} onClick={changeLess}>{'<$10'}</button>
          <button className={selectedButton === 'more' ? selectedYes : selectedNo} onClick={changeMore}>{'$10+'}</button>
          </div>


        {/* <div>
          <p>What genres are you interested in?</p>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Who shot first?</option>
            <option>Han Solo</option>
            <option>Anyone</option>
          </select>
        </div> */}

        <div className="card-actions justify-end mt-5">
          <button className="btn hover:btn-primary w-full">Get Me Games!</button>
        </div>
      </div>
    </div>
  );
}
