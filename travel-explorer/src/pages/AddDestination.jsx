import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddDestination() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", country: "", image: "", description: "",
    category: "", bestTimeToVisit: "", duration: "", rating: 4.0, price: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/destinations", { ...formData, attractions: [] });
      navigate("/destinations");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="form-container">
      <h2>Add New Destination</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <button className="submit-btn" type="submit">Save Destination</button>
      </form>
    </div>
  );
}
export default AddDestination;