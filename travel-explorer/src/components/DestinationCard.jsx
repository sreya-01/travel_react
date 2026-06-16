import { useDispatch } from "react-redux";

import {
  addFavorite
} from "../features/favoriteSlice";

function DestinationCard({
  destination
}) {

  const dispatch = useDispatch();

  function handleFavorite() {

    dispatch(
      addFavorite(destination)
    );

  }

  return (

    <div className="card">

      <img
        src={destination.image}
        alt={destination.name}
      />
    
    <h2>{destination.name}</h2>

      <p>{destination.country}</p>

      <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        ❤ Add To Favorites
      </button>

    </div>

  );
}

export default DestinationCard;
