import Image from 'next/image'
import Link from 'next/link'
import SearchCard from '../../../components/SearchCard';


export default function Home() {
  return (
    <div className='flex justify-left items-center mt-[250px] bg-slate-200 pl-40'>
      <SearchCard/>
    </div>
  )
}
