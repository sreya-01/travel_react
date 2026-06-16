import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const favorites = useSelector(
    state => state.favorites
  );

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/destinations">Destinations</Link>
      
      {/* Homework Task 1: Show Logged In User Name */}
      {user && <span style={{ color: "#93c5fd", fontWeight: "bold" }}>Welcome, {user.name}</span>}

      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <Link to="/logout">Logout</Link>
      )}

      <Link to="/favorites">
        Favorites ({favorites.length})
      </Link>

    </nav>
  );
}

export default Navbar;