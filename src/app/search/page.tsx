'use client';
import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../../components/SearchCard';
import GameCard from '../../../components/GameCard';
import Footer from '../../../components/Footer';
import SkeletonLoader from '../../../components/Skeleton';
import { useSelector, useDispatch } from 'react-redux';


export default function Home() {
 const gameState = useSelector(state => state.searchResult.gameList);
 const loadingState = useSelector(state => state.searchResult.loading);

console.log(gameState)
console.log(loadingState);

// const gameList = [];
//   for (let i = 0; i < gameState.length; i++) {
//     gameList.push(<GameCard name={gameState[i].name} playerCount={gameState.playerCount} gameLength={gameState[i].gameLength} category={gameState[i].category} link={gameState[i].category}/>)
//   }


  return (
    <div className='flex flex-col md:flex-row md:justify-between ml-5 mr-5 min-w-[50%]'>
      <div className='w-full md:w-2/3 min-w-[50px] flex flex-wrap justify-center mt-[10%] md:mt-[5%] min-w-[30%]'>
      <div className='w-full md:w-1/3 min-w-[50px] flex flex-wrap justify-center mt-[10%] md:mt-[3%] min-w-[50%]'>
        <SearchCard/>
      </div> 
  </div>

      { loadingState === null ? <div className='w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[10%] min-w-[55%] mr-[5%]'>
        <h1 className='font-black text-4xl text-[#323232]'> Select Options to Search!</h1>
        <Image src='/Search.svg' alt='search-icon' width={300} height={400} className='absolute w-[20%] h-fit mt-[5%]'/>
        </div>
       : loadingState === true
       ?
       <div className='w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[5%] min-w-[55%] mr-[5%] '> 
        <SkeletonLoader/>
        <SkeletonLoader/>
        <SkeletonLoader/>
        <SkeletonLoader/>
        <SkeletonLoader/>
        <SkeletonLoader/>
      </div>
      :
      <div className='w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[5%] min-w-[55%] mr-[5%] '> 
        <GameCard/>
        <GameCard/>
        <GameCard/>
      </div>
      }
    </div>
  )
}
