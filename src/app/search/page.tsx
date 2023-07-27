"use client";
import Image from "next/image";
import Link from "next/link";
import SearchCard from "../../../components/SearchCard";
import GameCard from "../../../components/GameCard";
import Footer from "../../../components/Footer";
import SkeletonLoader from "../../../components/Skeleton";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const gameState = useSelector((state) => state.searchResult.gameList);
  const loadingState = useSelector((state) => state.searchResult.loading);

  console.log(gameState);
  console.log(loadingState);

  const gameList = [];
  for (let i = 0; i < gameState.length; i++) {
    gameList.push(
      <GameCard
        name={gameState[i].name}
        price={`$${gameState[i].price}`}
        playerCount={`${gameState[i].min_players} - ${gameState[i].max_players}`}
        gameLength={`${gameState[i].min_playtime} - ${gameState[i].max_playtime}`}
        link={gameState[i].official_url}
        src={gameState[i].image_url}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-[1100px]">
      <div className="mb-auto flex flex-col md:flex-row md:justify-between ml-5 mr-5">
        <div className="w-full md:w-2/3 min-w-[50px] flex flex-wrap justify-center mt-[10%] md:mt-[5%] min-w-[30%]">
          <div className="w-full md:w-1/3 min-w-[50px] flex flex-wrap justify-center mt-[10%] md:mt-[3%] min-w-[50%]">
            <SearchCard />
          </div>
        </div>
        {loadingState === null ? (
          <div className="w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[10%] min-w-[55%] mr-[5%]">
            <h1 className="font-black text-4xl text-[#323232]">
              {" "}
              Select Options to Search!
            </h1>
            <Image
              src="/Search.svg"
              alt="search-icon"
              width={300}
              height={400}
              className="absolute w-[20%] h-fit mt-[5%]"
            />
          </div>
        ) : loadingState === true ? (
          <div className="w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[5%] min-w-[55%] mr-[5%] mb-[10%]">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
        ) : (
          <div className="w-full md:w-2/3  flex flex-wrap justify-center mt-[100%] md:mt-[5%] min-w-[55%] mr-[5%] mb-[10%]">
            {gameList}
          </div>
        )}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
