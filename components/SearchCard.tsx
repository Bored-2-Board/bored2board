"use client";
import React from "react";
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

  let getGamesStyle = "btn btn-disabled w-full";

  if (
    selectedGenre !== "Genre" &&
    players !== null &&
    selectedButton !== null
  ) {
    getGamesStyle = "btn hover:btn-primary w-full";
  }

  if (anything === true && players !== null && selectedButton !== null) {
    getGamesStyle = "btn hover:btn-primary w-full";
  }

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

  const changeAnything = () => {
    setAnything(!anything);
    !anything ? setDisabled(true) : setDisabled(false);
    setDropdown(false);
  };

  const changeGenre = (e) => {
    e.preventDefault();
    setDropdown(!dropdownOpen);
  };

  const changePlayers = (e) => {
    setPlayers(e.target.value);
  };

  const selectGenre = (e) => {
    setSelectedGenre(e.target.text);
    setGenre(true);
    setDropdown(false);
  };
  // selectedGenre = Genre we are sending -- if anything is true, send something else
  // players = players we are sending
  // price

  const selectedYes = "btn btn-primary min-w-[30%] mx-2";
  const selectedNo = "btn min-w-[30%] mx-2";

  const falseColor = "m-1 btn w-full";
  const trueColor = "m-1 btn btn-primary w-full";

  const dropdownActive = "m-1 btn w-full";
  const dropdownInactive = "m-1 btn btn-primary w-full";
  const disabled = "btn btn-disabled";

  const theBigClick = async () => {
    try {

      let category;

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
          category = 'Random'
        };


      // dispatch(startLoading());
      let playerCount = players;
      let price = selectedButton;

      const settings = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price,
          playerCount,
          category,
        }),
      };

      const response = await fetch('/api/getGames', settings);
      const gameList = await response.json();
      // dispatch(addSearchResults(gameList));



    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      data-theme="light"
      className="flex absolute card w-96 bg-base-100 shadow-xl"
    >
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">bored2board</h2>
        <br></br>
        <p>How many players do you have?</p>
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
        <p>What do you want to play?</p>
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
          <p>OR</p>
        </div>
        <button
          className={anything ? trueColor : falseColor}
          onClick={changeAnything}
        >
          ANYTHING
        </button>
        <br></br>
        <p>What&apos;s your price point?</p>
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
          <button className={getGamesStyle}>Get Me Games!</button>
        </div>
      </div>
    </div>
  );
}
