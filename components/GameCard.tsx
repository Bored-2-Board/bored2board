import React from 'react'
import Image from 'next/image';

export default function GameCard({ name, playerCount, gameLength, category, price, link, src}) {
  return (
    <div className="flex card w-[20%] h-[auto] g-base-100 shadow-xl m-3 overflow-hidden">
      <div className=''>
  <Image src={src ? src : "/dbd.jpg"} alt='dbd' width={200} height={200} id='gamecard-image' className='rounded-2xl w-full'/>
  </div>
  <div className="card-body">
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
