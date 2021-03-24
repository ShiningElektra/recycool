import Head from "next/head";
import Button from "../components/buttons/Button";
import styles from "../styles/Home.module.css";
import React from "react";
import Navigation from "../components/navigation/Navigation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recycool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button primary={true} label="Spielen" />
      </main>
    </div>
  );
}
