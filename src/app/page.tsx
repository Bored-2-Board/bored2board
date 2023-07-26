'use client';
import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../components/SearchCard';
import GameCard from '../../components/GameCard';
import SkeletonLoader from '../../components/Skeleton';
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

      const popularResponse = await fetch('/api/new');
      const newResponse = await fetch('/api/popular')
      const popularGameList = await popularResponse.json();
      const newGameList = await newResponse.json();


      dispatch(addPopularResults(popularGameList.data.games))
      dispatch(addNewResults(newGameList.data.games));

    } catch (e) {
      console.log(e);
    }
  }
  getCards()
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
  
    for (let i = 0; i < 3; i++) {
      popularList.push(<GameCard name={popularGameList[i].name} price={`$${popularGameList[i].price}`} playerCount={`${popularGameList[i].min_players} - ${popularGameList[i].max_players}`} gameLength={`${popularGameList[i].min_playtime} - ${popularGameList[i].max_playtime}`} link={popularGameList[i].official_url} src={popularGameList[i].image_url}/>)
    }
  }

  console.log(popularList.length)

    const newList = [];

    if (newGameList.length !== 0) {
   for (let i = 0; i < 3; i++) {
    newList.push(<GameCard name={newGameList[i].name} price={`$${newGameList[i].price}`} playerCount={`${newGameList[i].min_players} - ${newGameList[i].max_players}`} gameLength={`${newGameList[i].min_playtime} - ${newGameList[i].max_playtime}`} link={newGameList[i].official_url} src={newGameList[i].image_url}/>)
  }
}

const spookySkeletons = [<SkeletonLoader />, <SkeletonLoader />, <SkeletonLoader />]

  return (
    <div>
    <div className='flex justify-center items-center mt-[3%]'>
      <h1 className='font-black text-4xl text-slate-800' >Trending Games</h1>
      </div>
    {popularLoading ? 
     <div className='flex justify-center items-center mt-[2%]'>
     {spookySkeletons}
   </div>
   :
    <div className='flex justify-center items-center mt-[2%]'>
      {popularList}
    </div>
    }
    <div className='flex justify-center items-center mt-[4%] '>
      <h1 className='font-black text-4xl text-slate-800' >New Games</h1>
      </div>
      {newLoading ? 
     <div className='flex justify-center items-center mt-[2%]'>
     {spookySkeletons}
   </div>
   :
    <div className='flex justify-center items-center mt-[2%]'>
      {newList}
    </div>
    }
    <div className='flex justify-center items-center mt-[4%]'>
      <h1 className='font-black text-4xl text-slate-800' >WishList</h1>
      </div>
    <div className='flex justify-center items-center mt-[2%]'>
    {spookySkeletons}
    </div>
    <div className='mt-[5%]'>
    <Footer/>
    </div>
    </div>
  )
}
