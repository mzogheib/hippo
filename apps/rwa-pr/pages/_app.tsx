import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppStateProvider } from "../components/app-state";
import AuthProvider from "../components/auth/auth-provider";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <AppStateProvider>
        <Component {...pageProps} />
      </AppStateProvider>
    </AuthProvider>
  );
}
