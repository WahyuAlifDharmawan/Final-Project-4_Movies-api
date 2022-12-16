import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesSearch } from "../features/omdbapi/omdbapiSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const moviesSearch = useSelector((state) => state.search.entities);

  const getSearchParams = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    const searchParams = params.get("t");
    return searchParams;
  };
  return (
    <>
      <div className="text-center p-6 text-4xl font-serif">Search Page</div>
      <h2 className="text-lg font-semibold capitalize text-gray-900 md:text-xl">
        Search Result For "{getSearchParams()}"
      </h2><br />
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 w-68 m-3">
        {moviesSearch.map((movie) => {
          return (
            <div className= "flex flex-col py-2 px-6 rounded-md border border-black " 
            key={movie?.imdbID}>
              <img className="h-50 w-40 " src={movie?.Poster} />
              <h1 className="card-title font-bold">{movie?.Title}</h1>
              <h1 id="year">{movie?.Year}</h1>
              <h1 id="type">{movie?.Type}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchPage;
