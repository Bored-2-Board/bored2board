'use client';
import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../../components/SearchCard';
import GameCard from '../../../components/GameCard';
import Footer from '../../../components/Footer';
import SkeletonLoader from '../../../components/Skeleton';
import { useSelector, useDispatch } from 'react-redux';


export default function Home() {
  // this is grabbing the current gameList for the search page from redux
 const gameState = useSelector(state => state.searchResult.gameList);

 // this is checking to see if the search page is currently loading based on a state var in the redux store
 const loadingState = useSelector(state => state.searchResult.loading);

// this is iterating through the current gameList which is an array of objects
// passing all their info to the GameCard component which renders a card, and then pushing it into the gameList array which we then render
const gameList = [];
  for (let i = 0; i < gameState.length; i++) {
    gameList.push(<GameCard name={gameState[i].name} price={`$${gameState[i].price}`} playerCount={`${gameState[i].min_players} - ${gameState[i].max_players}`} gameLength={`${gameState[i].min_playtime} - ${gameState[i].max_playtime}`} link={gameState[i].official_url} src={gameState[i].image_url}/>)
  }


  // this will check if search results are loading, if they are it will show some skelton loaders
  // if the user just got onto the page -- meaning loading === null -- we will invite them to start a search
  // and if the results are not loading we render the appropriate cards to the page
return (
  <div className='flex flex-col min-h-[1100px]'>
    <div className='mb-auto flex flex-col md:flex-row md:justify-between ml-5 mr-5'>
      <div className='w-full md:w-2/3 min-w-[50px] flex flex-wrap justify-center mt-[10%] md:mt-[5%] min-w-[30%]'>
        <div className='w-full md:w-1/3 min-w-[50px] flex flex-wrap justify-center mt-[10%] md:mt-[3%] min-w-[50%]'>
          <SearchCard/>
        </div> 
      </div>
      { loadingState === null ? 
      <div className='w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[10%] min-w-[55%] mr-[5%]'>
        <h1 className='font-black text-4xl text-[#323232]'> Select Options to Search!</h1>
        <Image src='/Search.svg' alt='search-icon' width={300} height={400} className='absolute w-[20%] h-fit mt-[5%]'/>
      </div>
      : loadingState === true ?
      <div className='w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[5%] min-w-[55%] mr-[5%] mb-[10%]'> 
        <SkeletonLoader/>
        <SkeletonLoader/>
        <SkeletonLoader/>
        <SkeletonLoader/>
        <SkeletonLoader/>
        <SkeletonLoader/>
      </div>
      : gameList.length === 0 ?
      <div className='w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[10%] min-w-[55%] mr-[5%]'>
        <h1 className='font-black text-4xl text-[#323232]'>Sorry, no results matched your request</h1>
        <Image src='/BBCoolLogo.png' alt='b2b-logo' width={300} height={400} className='absolute w-[30%] h-fit'/>
      </div>
      :
      <div className='w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[5%] min-w-[55%] mr-[5%] mb-[10%]'> 
        {gameList}
      </div>
      }
    </div>
    <div className='w-full'>
      <Footer/>
    </div>
  </div>
)
}