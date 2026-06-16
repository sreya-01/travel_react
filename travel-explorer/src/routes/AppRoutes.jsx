import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import AddDestination from "../pages/AddDestination";
import EditDestination from "../pages/EditDestination";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Favorites from "../pages/Favorites";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:id" element={<DestinationDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      {/* Protected Routes (Homework Task 4) */}
      <Route 
        path="/add-destination" 
        element={
          <ProtectedRoute>
            <AddDestination />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/edit-destination/:id" 
        element={
          <ProtectedRoute>
            <EditDestination />
          </ProtectedRoute>
        } 
      />
      <Route
        path="/favorites"
        element={<Favorites />}
        />

    </Routes>
  );
}

export default AppRoutes;