import type { PropsWithChildren } from "react";
import NavBar from "./components/NavBar";
import "./globals.css";
import AppHeading from "./components/AppHeading";

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
        <AppHeading />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
