import type { PropsWithChildren } from "react";
import NavBar from "./components/NavBar";
import "./globals.css";
import AppHeading from "./components/AppHeading";

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body>
        <AppHeading />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
