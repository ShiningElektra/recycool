import Head from "next/head";
import Welcome from "../components/welcome/Welcome";

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
