"use client";
import Image from "next/image";
import Link from "next/link";
import SearchCard from "../../components/SearchCard";
import GameCard from "../../components/GameCard";
import SkeletonLoader from "../../components/Skeleton";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPopularResults,
  startLoading,
} from "./store/PopularGames/popularGamesSlice";
import { addNewResults, startLoadingNew } from "./store/NewGames/newGameSlice";

import {
  addAllWishlistGames,
  startLoadingWish,
} from "./store/WishlistGames/wishlistGamesSlice";

// import { isLoggedIn, startLoadingNew } from './store/NewGames/newGameSlice'

export default function Home() {
  const dispatch = useDispatch();

  //List of games held in the redux store for trending, and for new games
  const popularGameList = useSelector((state) => state.popularResult.gameList);
  const newGameList = useSelector((state) => state.newResult.gameList);
  const wishlistGameList = useSelector(
    (state) => state.wishlistResult.gameList
  );
  // check to see if the cards are loading, we will display loaders if so
  const popularLoading = useSelector((state) => state.popularResult.loading);
  const newLoading = useSelector((state) => state.newResult.loading);
  const wishLoading = useSelector((state) => state.wishlistResult.loading);

  const isLoggedIn = useSelector((state) => state.loginResult.isLoggedIn);

  const userDataID = useSelector(state => state.userResult.id)

  console.log(wishlistGameList);

  // This happens once on load, this is a fetch request to the backend to get all the trending/new games so we can update the
  // redux store and then render them to the page as cards
  useEffect(() => {
    async function getCards() {
      try {
        dispatch(startLoading());
        dispatch(startLoadingNew());

        const popularResponse = await fetch("/api/popular");
        const newResponse = await fetch("/api/new");
        const popularGameList = await popularResponse.json();
        const newGameList = await newResponse.json();

        dispatch(addPopularResults(popularGameList.data.games));
        dispatch(addNewResults(newGameList.data.games));

        if (isLoggedIn) {
          console.log("HITTING");
          const newGameList = await fetch(`/api/wishlist/get?userID=${userDataID}`);
          const newWishlist = await newGameList.json()

          if (newWishlist.message !== 'Empty Wishlist') {
          if (newWishlist.wishlist.length !== 0) {
            const modifiedData = [];
            newWishlist.wishlist.forEach(el => {
              modifiedData.push({key: el.id, price:`$${el.cost}`, src:el.image, name:el.name, favorited:true, playerCount:el.num_players, gameLength:el.game_length, link:el.url})
            });
          dispatch(addAllWishlistGames(modifiedData))
          }
        }
      }
      } catch (e) {
        console.log(e);
      }
    }
    getCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // logic for popular and game list renders
  // this iterates over the current store data and turns that data into a game card
  // it is then added to an array which we will render in the return statement

  //popularGameList
  //newGameList

  // console.log(popularGameList[0].name)
  const popularList = [];

  if (popularGameList.length !== 0) {
    for (let i = 0; i < 5; i++) {
      popularList.push(
        <GameCard
          key={i}
          name={popularGameList[i].name}
          price={`$${popularGameList[i].price}`}
          playerCount={`${popularGameList[i].min_players} - ${popularGameList[i].max_players}`}
          gameLength={`${popularGameList[i].min_playtime} - ${popularGameList[i].max_playtime}`}
          link={popularGameList[i].official_url}
          src={popularGameList[i].image_url}
        />
      );
    }
  }

  const newList = [];

  if (newGameList.length !== 0) {
    for (let i = 0; i < 5; i++) {
      newList.push(
        <GameCard
          key={i}
          name={newGameList[i].name}
          price={`$${newGameList[i].price}`}
          playerCount={`${newGameList[i].min_players} - ${newGameList[i].max_players}`}
          gameLength={`${newGameList[i].min_playtime} - ${newGameList[i].max_playtime}`}
          link={newGameList[i].official_url}
          src={newGameList[i].image_url}
        />
      );
    }
  }

  const wishListGames = [];
  
  // console.log('current store', wishlistGameList[0].name)
  console.log('RIGHT BEFORE ADDED', wishlistGameList)
  if (wishlistGameList) {
    if (wishlistGameList.length !== 0) {
      for (let i = 0; i < wishlistGameList.length; i++) {
        console.log(wishlistGameList[i].name)
        wishListGames.push(
          <GameCard
            key={i}
            name={wishlistGameList[i].name}
            price={wishlistGameList[i].price}
            playerCount={wishlistGameList[i].playerCount}
            gameLength={wishlistGameList[i].gameLength}
            link={wishlistGameList[i].link}
            src={wishlistGameList[i].src}
            favorited={wishlistGameList[i].favorited}
          />
        );
      }
    }
  }

  const spookySkeletons = [
    <SkeletonLoader key={1} />,
    <SkeletonLoader key={2} />,
    <SkeletonLoader key={3} />,
    <SkeletonLoader key={4} />,
    <SkeletonLoader key={5} />,
  ];

  return (
    <div>
      <div className="flex justify-center items-center mt-[3%]">
        <h1 className="font-black text-4xl text-slate-800">Trending Games</h1>
      </div>
      {popularLoading ? (
        <div className="flex flex-wrap justify-center items-center mt-[2%]">
          {spookySkeletons}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center mt-[2%]">
          {popularList}
        </div>
      )}
      <div className="flex justify-center items-center mt-[4%] ">
        <h1 className="font-black text-4xl text-slate-800">New Games</h1>
      </div>
      {newLoading ? (
        <div className="flex flex-wrap justify-center items-center mt-[2%]">
          {spookySkeletons}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center mt-[2%]">
          {newList}
        </div>
      )}
      <div className="flex justify-center items-center mt-[4%]">
        <h1 className="font-black text-4xl text-slate-800">WishList</h1>
      </div>
      {isLoggedIn && wishLoading ? (
        <div className="flex flex-wrap justify-center items-center mt-[2%]">
          {spookySkeletons}
        </div>
      ) : isLoggedIn && wishListGames.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-[4%]">
        <h1 className="font-black text-4xl text-slate-600">
          Wishlist Empty!
        </h1>
        <Image
          src="/BBCoolLogo.png"
          alt="BB-Logo"
          width={400}
          height={100}
          className=" w-[200px] h-full transform scale-[200%] mt-10 mb-2"
        />
      </div>
      ) :  isLoggedIn && wishLoading === false ? (
        <div className="flex justify-center flex-wrap items-center mt-[2%]">
        {wishListGames}
      </div>

      ) : (
        <div className="flex flex-col justify-center items-center mt-[4%]">
          <h1 className="font-black text-4xl text-slate-600">
            Login to view Wishlist!
          </h1>
          <Image
            src="/BBCoolLogo.png"
            alt="BB-Logo"
            width={400}
            height={100}
            className=" w-[200px] h-full transform scale-[200%] mt-10 mb-2"
          />
          <Link href="/login" className="w-full justify-self-center pl-[41%]">
            <button className="btn btn-primary w-[30%] mt-[90px] mx-auto">
              Login
            </button>
          </Link>
        </div>
      )}
      <div className="mt-[5%]">
        <Footer />
      </div>
    </div>
  );
}
