import express from "express";
import cors from "cors";
import { auth, requiredScopes } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";
import { scopes } from "profile-service-sdk";

dotenv.config();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

const checkScopes = requiredScopes(scopes.readAllData);

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
