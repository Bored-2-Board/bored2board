import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../components/SearchCard';
import GameCard from '../../components/GameCard';


export default function Home() {
  return (
    <div className='flex justify-center items-center mt-[250px] bg-slate-200'>
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  )
}
