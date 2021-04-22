import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/navigation/Navigation";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [openCredits, setOpenCredits] = useState(false);
  const [openHighscore, setOpenHighscore] = useState(false);

  function handleClick(value) {
    if (value === "credits") {
      setOpenCredits(true);
      setOpenHighscore(false);
    }
    if (value === "highscore") {
      setOpenHighscore(true);
      setOpenCredits(false);
    }
  }
  return (
    <>
      <div className={openCredits ? "visible" : "hidden"}>
        Credits
        {/* Callbackfuncton - wenn ich clicke führe aus was drin ist */}
        <button onClick={() => setOpenCredits(false)}>zu</button>
      </div>
      <div className={openHighscore ? "visible" : "hidden"}>
        Highscore
        <button onClick={() => setOpenHighscore(false)}>zu</button>
      </div>
      <Navigation onClick={handleClick} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
