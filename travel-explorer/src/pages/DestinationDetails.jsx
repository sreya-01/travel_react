import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    async function getDestination() {
      try {
        const response = await api.get(`/destinations/${id}`);
        setDestination(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDestination();
  }, [id]);

  if (!destination) return <h2>Loading dynamic profile details...</h2>;

  return (
    <div className="details">
      <img src={destination.image} alt={destination.name} />
      <h1>{destination.name}</h1>
      <p className="desc">{destination.description}</p>
      
      <div className="details-grid">
        <p><strong>Country:</strong> {destination.country}</p>
        <p><strong>Category:</strong> {destination.category}</p>
        <p><strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}</p>
        <p><strong>Duration:</strong> {destination.duration}</p>
        <p><strong>Cost Reference:</strong> ₹{destination.price}</p>
        <p><strong>Rating:</strong> ⭐ {destination.rating}</p>
      </div>

      <h3>💡 Highlights</h3>
      <p>{destination.famousFor}</p>

      <h3>🗺️ Top Attractions</h3>
      <ul>
        {destination.attractions?.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationDetails;