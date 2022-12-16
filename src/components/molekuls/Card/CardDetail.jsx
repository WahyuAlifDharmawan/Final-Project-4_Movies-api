import React from "react";

const CardDetail = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-32 h-40 md:h-40 object-cover md:w-40 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={props.Poster}
            alt="Poster"
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {props.Title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{props.Plot}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
