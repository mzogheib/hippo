import type { PropsWithChildren } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import NavBar from "./components/NavBar";
import "./globals.css";
import AppHeading from "./components/AppHeading";
import Footer from "./components/Footer";
import AuthBar from "./components/AuthBar";

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Regular web app - Next.js</title>
      </head>
      <body>
        <UserProvider>
          <AppHeading />
          <AuthBar />
          <br />
          <NavBar />
          {children}
          <br />
          <br />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
