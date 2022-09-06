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
      <div className={`card w-full sm:card-side ${color} shadow-lg`}>
        <figure>
          <img src={image} alt={name} className="w-20 drop-shadow-md" />
        </figure>
        <div className="card-body items-center sm:items-start">
          <h2 className="card-title drop-shadow text-white items-center capitalize">
            {name}
            <span className="badge badge-sm border-0 bg-white text-black">
              {number}
            </span>
          </h2>
          <div className="justify-start flex gap-2">
            <span
              className={`badge ${color} ${textColor} contrast-150 drop-shadow border-0`}
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
