"use client";
import React from "react";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSearchResults, startLoading } from '../src/app/store/SearchResults/searchResultSlice'

export default function SearchCard() {

  const [anything, setAnything] = useState(false);
  const [genre, setGenre] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [players, setPlayers] = useState(6);
  const [selectedGenre, setSelectedGenre] = useState("Select Genre");
  const [dropdownOpen, setDropdown] = useState(false);
  const [disabledGenre, setDisabled] = useState(false);

  const dispatch = useDispatch();

  // this is the default styling for the "Get Games Button at the bottom of the card"
  let getGamesStyle = "btn btn-disabled w-full";

  // This is some logic that updates the style of that button if all the required data is filled out
  // need to UPDATE this to respond to state instead -- It does work though
  if (
    selectedGenre !== "Genre" &&
    players !== null &&
    selectedButton !== null
  ) {
    getGamesStyle = "btn hover:btn-primary w-full";
  }

  // this is more logic that checks to see if you clicked the "Anything button" -- this will also change the "Get Games button style"
  if (anything === true && players !== null && selectedButton !== null) {
    getGamesStyle = "btn hover:btn-primary w-full";
  }

  // These are all OnClick events that let us know which of the three price buttons is currently pressed
  const changeFree = () => {
    setSelectedButton("free");

    if (selectedButton === "free") {
      setSelectedButton(null);
    }
  };

  const changeLess = () => {
    setSelectedButton("less");

    if (selectedButton === "less") {
      setSelectedButton(null);
    }
  };

  const changeMore = () => {
    setSelectedButton("more");

    if (selectedButton === "more") {
      setSelectedButton(null);
    }
  };
  // see comment above ^^
  

  // This is a OnClick that will let us know if the Anything button was clicked -- This will also close the dropdown if it is still open when clicked
  const changeAnything = () => {
    setAnything(!anything);
    !anything ? setDisabled(true) : setDisabled(false);
    setDropdown(false);
  };

    // This is a function to change the status of the dropdown on click -- EX: 'Click' Open -> Close
    // We prevent default here so we can manage the open/close attribute with state. It tries to do this on its own and we need to stop that
  const changeGenre = (e) => {
    e.preventDefault();
    setDropdown(!dropdownOpen);
  };

  // This is a simple onChange function that will update state depending on what number the slider is over
  const changePlayers = (e) => {
    setPlayers(e.target.value);
  };

  // Whenever a item from the dropdown is selected, this will close the dropdown, and Update its text to match the selected option -- This will also update the
  // genre state which then updates the styling of the button
  const selectGenre = (e) => {
    setSelectedGenre(e.target.text);
    setGenre(true);
    setDropdown(false);
  };

  // these are just different styles that we dynamically render -- if you look at the return statement
  // you'll see the styles are different depending on state

  const selectedYes = "btn btn-primary min-w-[30%] mx-2";
  const selectedNo = "btn min-w-[30%] mx-2";

  const falseColor = "m-1 btn w-full";
  const trueColor = "m-1 btn btn-primary w-full";

  const dropdownActive = "m-1 btn w-full";
  const dropdownInactive = "m-1 btn btn-primary w-full";
  const disabled = "btn btn-disabled";


  // This is the bigClick even that happens whenever the client hits "Get Games".
  // This is going to look at all of the state variables and then send a fetch request to the backend to get the results that we want

  const theBigClick = async () => {
    try {
      // this updates the redux store and tells it that results are currently loading
  dispatch(startLoading());
      let category;
// We need to send the corresponding category ID to the backend so that the API calls are accurate 
        if (selectedGenre === 'Adventure') {
          category = 'KUBCKBkGxV';
        } else if (selectedGenre === 'Card Game') {
          category = 'eX8uuNlQkQ'
        } else if (selectedGenre === 'Competitive') {
          category = 'pacCjl7His'
        } else if (selectedGenre === 'Crime') {
          category = '7DfHn28Pcf'
        } else if (selectedGenre === 'Deduction') {
          category = 'bCBXJy9qDw'
        } else if (selectedGenre === 'Drinking') {
          category = 'We3MM46qBr'
        } else if (selectedGenre === 'Family Game') {
          category = '7rV11PKqME'
        } else if (selectedGenre === 'Fantasy') {
          category = 'ZTneo8TaIO'
        } else if (selectedGenre === 'Mystery') {
          category = 'BBZb2d0ePt'
        } else if (selectedGenre === 'Party Game') {
          category = 'X8J7RM6dxX'
        } else if (selectedGenre === 'Puzzle') {
          category = 'WVMOS3s2pb'
        } else if (selectedGenre === 'Trivia') {
          category = 'YGHGDjahKY'
        } else if (selectedGenre === 'Select Genre') {
          category = ''
        };


      let playerCount = players;
      let price = selectedButton;

      const settings = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      // We are sending our fetch request using query url parameters 
      const response = await fetch(`/api/search?categoryID=${category}&numPlayers=${playerCount}&price=${price}`, settings);
      const gameList = await response.json();
      
      // we are then updating the redux store and adding all the fetches games and the info
      dispatch(addSearchResults(gameList.data.games));

    } catch (e) {
      console.log(e);
    }
  };

    // return statement
  return (
    <div
      data-theme="light"
      className="flex absolute card w-96 bg-base-100 shadow-xl"
    >
      <figure></figure>
      <div className="card-body">
      <Image src='/BBCoolLogo.png' alt='BB-Logo' width={400} height={100} className=" w-[50px] h-full transform scale-[200%] ml-2"/>
        <br></br>
        <p className='font-semibold text-slate-700'>How many players do you have?</p>
        <input
          type="range"
          min={1}
          max="10"
          className="basic-transition range range-primary"
          step="1"
          onChange={changePlayers}
        />
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
        <br></br>
        <p className='font-semibold text-slate-700' >What do you want to play?</p>
        <details className="dropdown" open={dropdownOpen}>
          <summary
            className={!genre ? dropdownActive : dropdownInactive}
            disabled={disabledGenre}
            onClick={changeGenre}
          >
            {selectedGenre}
          </summary>
          <ul
            className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            onClick={selectGenre}
          >
            <li>
              <a>Adventure</a>
            </li>
            <li>
              <a>Card Game</a>
            </li>
            <li>
              <a>Competitive</a>
            </li>
            <li>
              <a>Crime</a>
            </li>
            <li>
              <a>Deduction</a>
            </li>
            <li>
              <a>Drinking</a>
            </li>
            <li>
              <a>Family Game</a>
            </li>
            <li>
              <a>Fantasy</a>
            </li>
            <li>
              <a>Mystery</a>
            </li>
            <li>
              <a>Party Game</a>
            </li>
            <li>
              <a>Puzzle</a>
            </li>
          </ul>
        </details>
        <div className="flex w-[100%] items-center justify-center pl-[150px]">
          <p className='font-semibold text-slate-700' >OR</p>
        </div>
        <button
          className={anything ? trueColor : falseColor}
          onClick={changeAnything}
        >
          ANYTHING
        </button>
        <br></br>
        <p className='font-semibold text-slate-700' >What&apos;s your price point?</p>
        <div className="flex justify-center space-between">
          <button
            className={selectedButton === "free" ? selectedYes : selectedNo}
            onClick={changeFree}
          >
            Free
          </button>
          <button
            className={selectedButton === "less" ? selectedYes : selectedNo}
            onClick={changeLess}
          >
            {"<$10"}
          </button>
          <button
            className={selectedButton === "more" ? selectedYes : selectedNo}
            onClick={changeMore}
          >
            {"$10+"}
          </button>
        </div>

        <div className="card-actions justify-end mt-5">
          <button className={getGamesStyle} onClick={theBigClick}>Get Me Games!</button>
        </div>
      </div>
    </div>
  );
}
