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

  const popularGameList = useSelector(state => state.popularResult.gameList);
  const newGameList = useSelector(state => state.newResult.gameList);

  const popularLoading = useSelector(state => state.popularResult.loading);
  const newLoading = useSelector(state => state.newResult.loading);


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
      <h1 className='font-black text-4xl' >Trending Games</h1>
      </div>
    <div className='flex justify-center items-center mt-[2%]'>
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
    <div className='flex justify-center items-center mt-[4%]'>
      <h1 className='font-black text-4xl' >New Games</h1>
      </div>
    <div className='flex justify-center items-center mt-[2%]'>
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
    <div className='flex justify-center items-center mt-[4%]'>
      <h1 className='font-black text-4xl' >WishList</h1>
      </div>
    <div className='flex justify-center items-center mt-[2%]'>
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
    <div className='mt-5'>
    <Footer/>
    </div>
    </div>
  )
}
