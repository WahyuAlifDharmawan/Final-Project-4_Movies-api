import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { movieDetails } from "../features/omdbapi/omdbapiSlice";
import CardDetail from "../components/molekuls/Card/CardDetail"

const DetailMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const movie = useSelector((state) => state.detail.detail);

  useEffect(() => {
    dispatch(movieDetails(movieId));
  }, [dispatch]);

  console.log(movie);

  return (
    <>
      <div className="text-center p-6 text-4xl font-serif">
        <h1>Detail Movie</h1>
      </div>
      <div className= "flex flex-col py-2 px-6 rounded-md border border-black " 
            key={movie?.imdbID}>
        <img className="h-50 w-40 " src={props.Poster} alt="poster" />
        <p className="card-title font-bold">{props.Title}</p>
        <p className="font-light" id="year">{props.Year}</p>
        <p id="type">{props.Type}</p>
      </div>
      
        {/* <div>
          <h1>{movie?.Title}</h1>
        </div> */}
    </>
  );
};

export default DetailMovie;
