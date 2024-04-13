import { useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthProviderComponent";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
