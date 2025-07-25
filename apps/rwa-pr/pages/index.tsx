import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import AuthBar from "../components/auth/auth-bar";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Root(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <NavBar />
        <div className={styles.description}>
          <AuthBar />
        </div>
      </main>
    </>
  );
}
