import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../../components/SearchCard';
import GameCard from '../../../components/GameCard';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between mt-10 ml-5 mr-5 min-w-[50%]'>
      <div className='w-full md:w-2/3 min-w-[50px] flex flex-wrap justify-center mt-[10%] md:mt-[10%] min-w-[50%]'>
        <SearchCard/>
      </div> 
      <div className='w-full md:w-2/3 min-w-[50px] flex flex-wrap justify-center mt-[90%] md:mt-[10%] min-w-[50%]'>
        <GameCard/>
        <GameCard/>
        <GameCard/>
      </div>
    </div>
  )
}
