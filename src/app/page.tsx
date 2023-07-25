import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../components/SearchCard';
import GameCard from '../../components/GameCard';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
    <div className='flex justify-center items-center mt-[10%]'>
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
