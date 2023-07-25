import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../components/SearchCard';


export default function Home() {
  return (
    <div className='flex justify-center items-center mt-[250px]'>
      <SearchCard/>
    </div>
  )
}
