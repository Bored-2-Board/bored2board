'use client';
import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../components/SearchCard';
import GameCard from '../../components/GameCard';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPopularResults, startLoading } from './store/PopularGames/popularGamesSlice'
import { addNewResults, startLoadingNew } from './store/NewGames/newGameSlice'

export default function Home() {

  const dispatch = useDispatch();

  //List of games held in the redux store for trending, and for new games
  const popularGameList = useSelector(state => state.popularResult.gameList);
  const newGameList = useSelector(state => state.newResult.gameList);

  // check to see if the cards are loading, we will display loaders if so
  const popularLoading = useSelector(state => state.popularResult.loading);
  const newLoading = useSelector(state => state.newResult.loading);


  // This happens once on load, this is a fetch request to the backend to get all the trending/new games so we can update the
  // redux store and then render them to the page as cards
  useEffect(() => {
    async function getCards(){
    try {
      dispatch(startLoading());
      dispatch(startLoadingNew());

      const popularResponse = await fetch('/api/getTrendingGames');
      const newResponse = await fetch('/api/getNewGames')
      const popularGameList = await popularResponse.json();
      const newGameList = await newResponse.json();

      dispatch(addPopularResults(popularGameList))
      dispatch(addNewResults(newGameList));

    } catch (e) {
      console.log(e);
    }
  }
  // getCards()
  });

  
  // logic for popular and game list renders
  // this iterates over the current store data and turns that data into a game card
  // it is then added to an array which we will render in the return statement

  // const popularList = [];
  //   for (let i = 0; i < 3; i++) {
  //     popularList.push(<GameCard />)
  //   };

  //   const newList = [];
  //   for (let i = 0; i < 3; i++) {
  //     newList.push(<GameCard />)
  //   };



  return (
    <div>
    <div className='flex justify-center items-center mt-[3%]'>
      <h1 className='font-black text-4xl text-slate-800' >Trending Games</h1>
      </div>
    <div className='flex justify-center items-center mt-[2%]'>
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
    <div className='flex justify-center items-center mt-[4%] '>
      <h1 className='font-black text-4xl text-slate-800' >New Games</h1>
      </div>
    <div className='flex justify-center items-center mt-[2%]'>
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
    <div className='flex justify-center items-center mt-[4%]'>
      <h1 className='font-black text-4xl text-slate-800' >WishList</h1>
      </div>
    <div className='flex justify-center items-center mt-[2%]'>
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
    <div className='mt-[5%]'>
    <Footer/>
    </div>
    </div>
  )
}
