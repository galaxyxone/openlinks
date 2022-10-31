import { Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Typography from "@mui/material/Typography";

import "./styles.css";

function Auth() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (!isLoading && isAuthenticated) {
    return <Redirect to="/export-links" />;
  }
  return <Typography margin={2}>Loading...</Typography>;
}

export default Auth;
