import { useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthProviderComponent";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import PropTypes from "prop-types";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
}

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
