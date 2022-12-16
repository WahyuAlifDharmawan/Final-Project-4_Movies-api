import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Movies } from "../features/omdbapi/omdbapiSlice";
import Card from "./molekuls/Card/Card";

const Movie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies.entities);

  useEffect(() => {
    dispatch(Movies());
  }, [dispatch]);

  // console.log(allMovies);
  return (
    <>
      <div>
        <div className="mx-6">
          <h1 className="text-4xl my-10 text-center font-serif">Home Page</h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 w-68 m-3">
          {allMovies.map((movie) => {
            return (
              <div
                
                key={movie?.imdbID}
              >
                <Card
                  Poster={movie?.Poster}
                  Year={movie?.Year}
                  Title={movie?.Title}
                  Type={movie?.Type}
                  Genre={movie?.Genre}
                  Plot={movie?.Plot}
                  detailClick={() =>
                    navigate(`/movie/i=${movie?.imdbID}`, { replace: true })
                  }
                />
                {/* <img className="h-40 w-32" src={movie?.Poster} />
                <h1>{movie?.Title}</h1> */}
                {/* <div className="flex flex-row gap-2 mt-4">
                  <ButtonDetails onClick={props.detailClick} />
                </div> */}
                {/* <button
                  onClick={() =>
                    navigate(`/movie/i=${movie?.imdbID}`, { replace: true })
                  }
                >
                  Detail
                </button> */}
                {/* <h1>{movie?.Poster}</h1> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
