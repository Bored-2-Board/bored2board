/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { addLoginStatus } from '../src/app/store/LoggedIn/loginSlice'
import { updateData } from '../src/app/store/UserData/userDataSlice'
import { addWishlistGame, removeWishlistGame } from '../src/app/store/WishlistGames/wishlistGamesSlice'


export default function GameCard({ name, playerCount, gameLength, price, link, src, favorited}) {
  // this is the state that determines wether or not our heart should light up --- and be added to db/redux store
  const [wish, setWishlist] = useState(false);


// this is grabbing all the wish-listed games stored in the redux store
const wishlistGameList = useSelector(
    (state) => state.wishlistResult.gameList
  );


  // this is checking if the given game card is present in the redux store, if it is, we set favorited to true so that
  // the heart lights up, and onClick it will get deleted from the db instead of trying to be added
console.log(name);
  useEffect(() => {
    for (let i = 0; i < wishlistGameList.length; i++) {
      if (name === wishlistGameList[i].name) {
        setWishlist(true);
        return;
      }
      setWishlist(false)
    }

  }, [name, wishlistGameList]); // we want this to run whenever there is updates to the redux store


  // this is grabbing the currently signed in user's ID assigned by the backend 
  const userData = useSelector(state => state.userResult.id)
  console.log('USER DATA ID',userData)

  // this is the onClick function to add a game to the database that relates to the the current user
  const addToWishList = async () => {
    const newPrice = Number(price.slice(1))
    console.log(newPrice)
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gamename: name,
        userID: userData,
        cost: newPrice,
        image_url: src,
        numPlayers: playerCount,
        gameLength: gameLength, 
        link: link || `https://www.google.com/search?q=${name}`,
      }),
    };
    await fetch('/api/wishlist/add', settings);
  };


  // this is a call to the database to remove a game that is already present
  const removeFromWishList = async () => {
    const settings = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    };
    await fetch(`/api/wishlist/delete?name=${name}&userID=${userData}`, settings); // We need to change this - the backend needs to accept a body because some games have & in them, messed up the query params
  };


  // if you look at the props above, you can see a favorited attribute
  // If that prop is true, we want to update this state so that the heart shows up red on render
  // We only need to do this once per card
 useEffect(() => {
    if (favorited) {
      setWishlist(true)
    } else {
      setWishlist(false)
    }
 }, []);

 // defining dispatch
  const dispatch = useDispatch();

  // This is relying on the local state "wish", onClick, not only does the red heart get lit up, but we also call our function
  // to add it to the database and update the redux store (We want to update the redux store so the changes get shown instantly)
  const wishlistGame = () => {
    if (userData.length < 1) return;

    wish ? setWishlist(false) : setWishlist(true);
    if (!wish) {
    dispatch(addWishlistGame({ name, playerCount, gameLength, price, link, src, favorited: true}))
    addToWishList()
    } else {
      dispatch(removeWishlistGame(name))
      removeFromWishList()
    }
  }

  // return statement
  // Need to update some styling so that the card looks nice even when there is a long name or attribute
  console.log(wish);
  return (
      <div className="card flex min-w-[300px] max-w-[10%] min-h-[435px] max-h-[435px] g-base-100 shadow-xl m-3">
        <div className='flex justify-center'>
          <img src={src ? src : "/dbd.jpg"} alt='dbd' width={200} height={200} id='gamecard-image' className='rounded-2xl w-[95%] max-h-[200px] mt-2'/>
        </div>
        <div className="card-body flex-col max-w-full overflow-hidden">
          <p className='text-slate-600 font-bold'>Name: {name}</p>
          <p className='text-slate-600 font-bold' >Player Count: {playerCount}</p>
          <p className='text-slate-600 font-bold' >Game Length: {gameLength} min</p>
          <p className='text-slate-600 font-bold' >Price: {price}</p>
          <a href={link ? link : `https://www.google.com/search?q=${name}`} target='_blank' className='underline text-slate-500 font-semibold'>Check it out here!</a>
        </div>
        <div className="flex justify-end rating gap-1 px-2 mb-2">
          <input 
            type="radio"
            name="rating-1"
            className={`${wish && userData !== '' ? "mask mask-heart bg-red-400" : "mask mask-heart bg-gray-400"}`}
            onClick={wishlistGame}>
          </input>
        </div>
      </div>
  )
}
