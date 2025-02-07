import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Custom auth hook

const ProtectedRoute = () => {
  const { user } = useAuth(); // Get user info from Context API or Redux

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
