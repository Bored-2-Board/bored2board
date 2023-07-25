import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../components/SearchCard';


export default function Home() {
  return (
    <div className='flex justify-center mt-[200px] mr-[400px]'>
      <SearchCard/>
    </div>
  )
}
