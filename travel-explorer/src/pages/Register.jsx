import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Bonus (Homework Task 2): Check if email already exists
      const checkUser = await api.get(`/users?email=${user.email}`);
      if (checkUser.data.length > 0) {
        alert("Email Already Exists!");
        return;
      }

      await api.post("/users", user);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button className="auth-btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;