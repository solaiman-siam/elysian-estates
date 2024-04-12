import { createContext } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

function AuthProviderComponent({ children }) {
  const authInfo = { name: "siam" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProviderComponent;

AuthProviderComponent.propTypes = {
  children: PropTypes.node,
};
