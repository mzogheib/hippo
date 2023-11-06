import express from "express";
import cors from "cors";
import { auth, requiredScopes } from "express-oauth2-jwt-bearer";

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: "http://localhost:4000",
  issuerBaseURL: `https://dev-qxah68iucyxmju34.us.auth0.com/`,
  tokenSigningAlg: "RS256",
});

const checkScopes = requiredScopes("read:all_data");

const app = express();

const port = process.env.PORT || 4002;

app.use(cors({ origin: "*" }));

const checks = [checkJwt, checkScopes];

app.get("/profile", ...checks, (_, res) => {
  res
    .status(200)
    .send({ name: "Hippo Fan", address: "123 Hippopotimus Boulevard" });
});

app.listen(port, () => {
  console.log(`Profile API listening at http://localhost:${port}`);
});
