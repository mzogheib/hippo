import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppStateProvider } from "../components/app-state";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
