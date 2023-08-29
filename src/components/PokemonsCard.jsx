import React from "react";
import { Link } from "react-router-dom";

export default function PokemonsCard({
  name,
  image,
  number,
  type,
  color,
  textColor,
  secondaryType,
  secondaryColor,
}) {
  return (
    <Link to={`/${name}`} className="w-full hover:scale-95">
      <div
        className={`flex flex-col sm:flex-row p-5 rounded-md gap-5 items-center sm:items-stretch justify-center sm:justify-between ${color}`}
      >
        <figure>
          <img src={image} alt={name} className="w-20 drop-shadow" />
        </figure>
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-center">
            <p className="font-bold text-lg text-white capitalize">{name}</p>
            <span className="badge badge-sm border-0 bg-white text-black font-semibold">
              {number}
            </span>
          </div>
          <div className="flex justify-start gap-2">
            <span
              className={`badge ${color} ${textColor} contrast-150 shadow border-0`}
            >
              {type}
            </span>
            {secondaryType && (
              <span
                className={`badge ${secondaryColor} ${textColor} contrast-150 drop-shadow border-0`}
              >
                {secondaryType}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
