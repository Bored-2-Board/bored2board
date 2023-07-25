import React from 'react'
import Image from 'next/image';

export default function GameCard({ name, playerCount, gameLength, category, price, link, src }) {
  return (
    <div className="card flex min-w-[250px] max-w-[25%] min-h-[375px] g-base-100 shadow-xl m-3">
      <div className='flex justify-center'>
  <Image src={src ? src : "/dbd.jpg"} alt='dbd' width={200} height={200} id='gamecard-image' className='rounded-2xl w-[95%] mt-2'/>
  </div>
  <div className="card-body flex-col max-w-full overflow-auto">
    <p>Name: {name}</p>
    <p>Player Count: {playerCount}</p>
    <p>Game Length: {gameLength}</p>
    <p>Category: {category}</p>
    <p>Price: {price}</p>
    <a href={link} target='_blank' className='underline'>Check it out here!</a>
  </div>
</div>
  )
}
