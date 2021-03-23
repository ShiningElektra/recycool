import Head from "next/head";
import Button from "../components/buttons/Button";
import Burger from "../components/burger/Burger";
import Menu from "../components/menu/Menu";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Recycool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Button primary={true} label="Spielen" />
      </main>
    </div>
  );
}
