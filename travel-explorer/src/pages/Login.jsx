import { useState } from "react";
import api from "../services/api"; // [cite: 1316]
import { useNavigate } from "react-router-dom"; // [cite: 1317]

function Login() {
  const navigate = useNavigate(); // [cite: 1319]
  const [email, setEmail] = useState(""); // [cite: 1320]
  const [password, setPassword] = useState(""); // [cite: 1321]

  async function handleSubmit(e) {
    e.preventDefault(); // [cite: 1324]
    try {
      // Safe parameters object instead of using literal backslash query text
      const response = await api.get("/users", {
        params: {
          email: email,
          password: password
        }
      });
      
      // json-server returns an array of matching user objects
      if (response.data.length > 0) {
        // [cite: 1328] Save the user data to browser localStorage [cite: 1330, 1409]
        localStorage.setItem("user", JSON.stringify(response.data[0])); // [cite: 1330, 1333]
        
        // Navigate back to the homepage and trigger a state reload for the Navbar [cite: 1334, 1335, 1410]
        navigate("/"); 
        window.location.reload(); // [cite: 1335]
      } else {
        // Triggers Homework Task 3 error feedback [cite: 1338, 1892]
        alert("Invalid Email Or Password"); // [cite: 1338, 1894]
      }
    } catch (error) {
      console.error("Login request failed:", error);
      alert("Could not reach the database authentication server.");
    }
  }

  return (
    <div className="auth-container"> {/* [cite: 1622, 1784] */}
      <div className="auth-card"> {/* [cite: 1623, 1790] */}
        <h1>Login</h1> {/* [cite: 1798] */}
        <form onSubmit={handleSubmit}> {/* [cite: 1340] */}
          <input
            type="email"
            placeholder="Email" // [cite: 1343]
            value={email}
            onChange={(e) => setEmail(e.target.value)} // [cite: 1344, 1345]
            required
          />
          <input
            type="password"
            placeholder="Password" // [cite: 1350]
            value={password}
            onChange={(e) => setPassword(e.target.value)} // [cite: 1351, 1352]
            required
          />
          <button className="auth-btn" type="submit">
            Login {/* [cite: 1358] */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login; // [cite: 1361]