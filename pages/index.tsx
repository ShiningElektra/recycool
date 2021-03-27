import Head from "next/head";
import Welcome from "../components/welcome/Welcome";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recycool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Welcome />
      </main>
    </>
  );
}
