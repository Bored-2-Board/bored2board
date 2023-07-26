import React from 'react'
import Image from 'next/image';

export default function GameCard({ name, playerCount, gameLength, category, price, link, src }) {
  return (
    <div className="card flex min-w-[250px] max-w-[25%] min-h-[375px] g-base-100 shadow-xl m-3">
      <div className='flex justify-center'>
  <Image src={src ? src : "/dbd.jpg"} alt='dbd' width={200} height={200} id='gamecard-image' className='rounded-2xl w-[95%] mt-2'/>
  </div>
  <div className="card-body flex-col max-w-full overflow-auto">
    <p className='text-slate-600 font-bold' >Name: {name}</p>
    <p className='text-slate-600 font-bold' >Player Count: {playerCount}</p>
    <p className='text-slate-600 font-bold' >Game Length: {gameLength}</p>
    <p className='text-slate-600 font-bold' >Category: {category}</p>
    <p className='text-slate-600 font-bold' >Price: {price}</p>
    <a href={link} target='_blank' className='underline text-slate-500 font-semibold'>Check it out here!</a>
  </div>
</div>
  )
}
