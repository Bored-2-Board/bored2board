/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { addLoginStatus } from '../src/app/store/LoggedIn/loginSlice'
import { updateData } from '../src/app/store/UserData/userDataSlice'
import { addWishlistGame, removeWishlistGame } from '../src/app/store/WishlistGames/wishlistGamesSlice'


export default function GameCard({ name, playerCount, gameLength, price, link, src, favorited}) {
  const [wish, setWishlist] = useState(false);

  const userData = useSelector(state => state.userResult.id)
  // console.log('USER ID', userData);
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
        link: link,
      }),
    };
    await fetch('/api/wishlist/add', settings);
  };

  const removeFromWishList = async () => {
    const settings = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    };
    await fetch(`/api/wishlist/delete?name=${name}&userID=${userData}`, settings);
  };

 useEffect(() => {
    if (favorited) {
      setWishlist(true)
    } else {
      setWishlist(false)
    }
 }, []);

  const dispatch = useDispatch();

  const wishlistGame = () => {
    wish ? setWishlist(false) : setWishlist(true);
    if (!wish) {
    dispatch(addWishlistGame({ name, playerCount, gameLength, price, link, src, favorited: true}))
    addToWishList()
    } else {
      dispatch(removeWishlistGame(name))
      removeFromWishList()
    }
  }

  const wishlistGameList = useSelector(
    (state) => state.wishlistResult.gameList
  );

  // 

  

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
            className={`${wish ? "mask mask-heart bg-red-400" : "mask mask-heart bg-gray-400"}`}
            onClick={wishlistGame}>
          </input>
        </div>
      </div>
  )
}
