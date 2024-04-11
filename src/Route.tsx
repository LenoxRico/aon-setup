import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import oktaConfig from "./constants/oktaConfig";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const oktaAuth = new OktaAuth(oktaConfig);

const Routes = () => {
	const history = useHistory();
	const originalUri = async (_oktaAuth, originalUri) => {
		history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
	};

	return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={originalUri}>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <SecureRoute path="/profile" component={Profile} />
        <Route path="/login/callback" component={LoginCallback} />
        {/* <Route path="/" exact>
            <Redirect to="/login" />
          </Route> */}
      </Switch>
    </Security>
  );
};

export default Routes;
