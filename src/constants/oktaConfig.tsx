import { OktaAuthOptions } from "@okta/okta-auth-js";

const oktaConfig: OktaAuthOptions = {
  issuer: "https://{yourOktaDomain}/oauth2/default",
  clientId: "{yourClientId}",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
};

export default oktaConfig;
