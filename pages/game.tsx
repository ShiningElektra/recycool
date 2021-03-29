import Head from "next/head";
import GamePage from "../components/game/GamePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recycool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GamePage />
      </main>
    </>
  );
}
