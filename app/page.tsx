"use client";

import { API_ACCESS_TOKEN } from "@/constants/config";
import React, { useEffect, useState } from "react";

export interface IMovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Home = () => {
  const [result, setResult] = useState<IMovieResult[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            headers: {
              Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
          }
        );
        const value = await response.json();
        setResult(value?.results);

        return value;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPI();
  }, []);

  return (
    <div>
      {" "}
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <p>
          no loading{" "}
          {result?.map((data) => (
            <p key={data.id}> {data.title}</p>
          ))}
        </p>
      )}
    </div>
  );
};

export default Home;
