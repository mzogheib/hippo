import type { PropsWithChildren } from "react";
import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
