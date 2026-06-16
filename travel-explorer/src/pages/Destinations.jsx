import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations();
  }, []);

  async function getDestinations() {
    try {
      const response = await api.get("/destinations");
      setDestinations(response.data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  }

  async function deleteDestination(id) {
    if (window.confirm("Are you sure you want to remove this destination?")) {
      try {
        await api.delete(`/destinations/${id}`);
        setDestinations(destinations.filter(item => item.id !== id));
      } catch (error) {
        console.error("Error deleting destination:", error);
      }
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Popular Destinations</h1>
        <Link to="/add-destination" className="add-btn">➕ Add Destination</Link>
      </div>
      <div className="destinations">
        {destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} onDelete={deleteDestination} />
        ))}
      </div>
    </>
  );
}

export default Destinations;