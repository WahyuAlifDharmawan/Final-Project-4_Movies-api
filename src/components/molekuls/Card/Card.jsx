import React from "react";
import ButtonDetails from "../../atoms/ButtonDetails";

const Card = (props) => {
  return (
    <>
      <div className="flex flex-col py-2 px-6 rounded-md border border-black h-full m-auto">
        <img className="h-50 w-40 " src={props.Poster} alt="poster" />
        <p className="card-title font-bold">{props.Title}</p>
        <p className="font-light" id="year">{props.Year}</p>
        <p id="type">{props.Type}</p>
        {/* <div className="flex flex-row gap-2 mt-4">
          <ButtonDetails onClick={props.detailClick} />
        </div> */}
      </div>
    </>
  );
};

export default Card;
