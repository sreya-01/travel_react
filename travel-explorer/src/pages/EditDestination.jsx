import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditDestination() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const res = await api.get(`/destinations/${id}`);
      setFormData(res.data);
    }
    loadData();
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await api.put(`/destinations/${id}`, formData);
    navigate("/destinations");
  }

  if (!formData) return <h2>Loading current configuration parameters...</h2>;

  return (
    <div className="form-container">
      <h2>Edit Destination Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
        <textarea name="description" value={formData.description} onChange={handleChange} />
        <button className="submit-btn" type="submit">Update Details</button>
      </form>
    </div>
  );
}
export default EditDestination;