import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";

const Callback = ({ history }) => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // Redirect to the main app after successful authentication
        history.push("/");
      } else if (error) {
        console.error("Authentication error:", error);
        // Redirect back to login
        history.push("/");
      }
    }
  }, [isLoading, isAuthenticated, error, history]);

  if (isLoading) {
    return <Typography sx={{ m: 1 }} fontWeight="bold" variant="h4">Loading...</Typography>;
  }

  if (error) {
    return <Typography sx={{ m: 1 }} fontWeight="bold" variant="h4" color="error">
      Authentication Error: {error.message}
    </Typography>;
  }

  return <Typography sx={{ m: 1 }} fontWeight="bold" variant="h4">Authenticating...</Typography>;
};

export default withRouter(Callback);
