"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "./ui/movie";
import { SeeMore } from "./SeeMore";

type MovieData = {
  title: string;
  vote_average: number;
  poster_path: string;
};

export const Popular = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const PopularMov = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1$api_keyd67d8bebd0f4ff345f6505c99e9d0289"
      );
      setMovies(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    PopularMov();
  }, []);

  console.log(movies, "sda");
  const firstTenMovies = movies.slice(0, 10);
  return (
    <div className="w-full h-[978px] px-[80px] pt-[24px]">
      <SeeMore genre={"Popular"} />
      <div>
        {firstTenMovies?.map((movie, index) => {
          return (
            <Movie
              key={index}
              mName={movie.title}
              score={movie.vote_average}
              source={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
};
