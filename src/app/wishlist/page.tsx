// 'use client';
// import Image from 'next/image'
// import Link from 'next/link'
// import SearchCard from '../../components/SearchCard';
// import GameCard from '../../../components/GameCard';
// import SkeletonLoader from '../../../components/Skeleton';
// import Footer from '../../../components/Footer';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { addWishlistGame, startLoading } from '../store/Wishlist/wishlistGameSlice'
// // import { addNewResults, startLoadingNew } from './store/NewGames/newGameSlice'

// export default function Home() {

//   const dispatch = useDispatch();

//   //List of games held in the redux store for trending, and for new games
//   // const wishlistGameList = useSelector(state => state.newResult.gameList)

//   // check to see if the cards are loading, we will display loaders if so
//   // const wishlistLoading = useSelector(state => state.wishlistResult.loading);
  

//   const isLoggedIn = useSelector(state => state.loginResult.isLoggedIn);


//   // This happens once on load, this is a fetch request to the backend to get all the trending/new games so we can update the
//   // redux store and then render them to the page as cards
//   useEffect(() => {
//     async function getCards(){
//     try {
//       dispatch(startLoading());
//       dispatch(startLoadingNew());

//       const popularResponse = await fetch('/api/new');
//       const newResponse = await fetch('/api/popular')
//       const popularGameList = await popularResponse.json();
//       const newGameList = await newResponse.json();
//       const wishlistGamesResponse = await fetch('/api/wishlist')
//       const wishlistGamesList = await wishlistGamesResponse.json()
     
//       dispatch(addPopularResults(popularGameList.data.games))
//       dispatch(addNewResults(newGameList.data.games));

//     } catch (e) {
//       console.log(e);
//     }
//   }
//   getCards()
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  
//   // logic for popular and game list renders
//   // this iterates over the current store data and turns that data into a game card
//   // it is then added to an array which we will render in the return statement

//   //popularGameList
//   //newGameList

//   // console.log(popularGameList[0].name)
// const wishlistList = [];

//   if (wishlistGameList.length !== 0) {
  
//     for (let i = 0; i < 6; i++) {
//       wishlistList.push(<GameCard name={wishlistGameList[i].name} price={`$${wishlistGameList[i].price}`} playerCount={`${wishlistGameList[i].min_players} - ${wishlistGameList[i].max_players}`} gameLength={`${wishlistGameList[i].min_playtime} - ${wishlistGameList[i].max_playtime}`} link={wishlistGameList[i].official_url} src={wishlistGameList[i].image_url}/>)
//     }
//   }


// const spookySkeletons = [<SkeletonLoader key={1}/>, <SkeletonLoader key={2}/>, <SkeletonLoader key={3}/>]

//   return (
//     <div>
//     <div className='flex justify-center items-center mt-[3%]'>
//       <h1 className='font-black text-4xl text-slate-800' >Your Wishlist</h1>
//       </div>
//     {wishlistLoading ? 
//      <div className='flex justify-center items-center mt-[2%]'>
//      {spookySkeletons}
//    </div>
//    :
//     <div className='flex justify-center items-center mt-[2%]'>
//       {popularList}
//     </div>
//     }
//     {/* <div className='flex justify-center items-center mt-[4%] '>
//       <h1 className='font-black text-4xl text-slate-800' >New Games</h1>
//       </div>
//       {wishlistLoading ? 
//      <div className='flex justify-center items-center mt-[2%]'>
//      {spookySkeletons}
//    </div>
//    :
//     <div className='flex justify-center items-center mt-[2%]'>
//       {newList}
//     </div>
//     } 
//     <div className='flex justify-center items-center mt-[4%]'>
//       <h1 className='font-black text-4xl text-slate-800' >WishList</h1>
//       </div>
//     { isLoggedIn ?
//       <div className='flex justify-center items-center mt-[2%]'>
//       {spookySkeletons}
//       </div>
//       :
//       <div className='flex flex-col justify-center items-center mt-[4%]'>
//     <h1 className='font-black text-4xl text-slate-600' >Login to view Wishlist!</h1>
//     <Image src='/BBCoolLogo.png' alt='BB-Logo' width={400} height={100} className=" w-[200px] h-full transform scale-[200%] mt-10 mb-2"/>
//     <Link href='/login' className='w-full justify-self-center pl-[41%]'>
//     <button className="btn btn-primary w-[30%] mt-[90px] mx-auto">Login</button>
//     </Link>
//     </div> */}
// {/* } */}
//     <div className='mt-[5%]'>
//     <Footer/>
//     </div>
//     </div>
//   )
// }
