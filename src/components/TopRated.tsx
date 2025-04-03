"use client";
import { useEffect, useState } from "react";
import { SeeMore } from "./SeeMore";
import { Movie } from "./ui/movie";
import axios from "axios";

type MovieData = {
  title: string;
  vote_average: number;
  poster_path: string;
};

export const TopRated = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const TopRatedMov = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1$api_keyd67d8bebd0f4ff345f6505c99e9d0289"
      );
      setMovies(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    TopRatedMov();
  });
  const firstTenMovies = movies.slice(0, 10);
  return (
    <div className="w-full h-[978px] px-[80px] pt-[24px]">
      <SeeMore genre={"Top Rated"} />
      {firstTenMovies?.map((movie, index) => {
        return (
          <Movie
            key={index}
            source={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            mName={movie.title}
            score={movie.vote_average}
          />
        );
      })}
    </div>
  );
};
