// core
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// ui lib
import { Typography } from "@mui/material";
// components
import ExportLinksPage from "./pages/ExportLinksPage";
import Auth from "./containers/Auth";
import Header from "./components/Header";
import Callback from "./Callback";
// styles
import "./app.styles.css";
import { auth0Config } from "./auth0.config";

function App() {
  const auth = useAuth0();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      auth.loginWithRedirect({ redirectUri: auth0Config.redirectUri });
    }
  }, [auth]);

  return (
    <div className="app-container">
      {auth.isAuthenticated && <Header />}
      <div className="routes-container">
        <Switch>
          <Route path="/callback" component={Callback} />
          <Route path="/" component={Auth} exact />
          {auth.isAuthenticated && (
            <Route exact path="/export-links" component={ExportLinksPage} />
          )}
        </Switch>
      </div>
      <footer className="app-footer">
        <Typography variant="caption">Openlinks.io</Typography>
      </footer>
    </div>
  );
}

export default App;
