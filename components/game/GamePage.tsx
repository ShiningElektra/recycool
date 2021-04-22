import Cans from "../cans/Cans";
import Field from "../field/Field";
import db from "../../server/db.json";
import styles from "./GamePage.module.css";
import React, { useState, useEffect } from "react";

console.log(db["waste-items"]);

function GamePage() {
  const [newItemList, setNewItemList] = useState([]);
  // const [randomList, setRandomList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  shuffle(db["waste-items"]);
  useEffect(() => {
    const itemList = db["waste-items"].slice(startIndex, 3);

    setNewItemList(itemList);
    console.log(setStartIndex);
    // setTimeout(() => {
    //   setShowHighscore(true);
    // }, 5000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cans}>
        <Cans />
      </div>
      <div className={styles.fields} id="cardholder">
        {/* für jedes item im newItemList returne mir ein Field*/}
        {newItemList.map((item) => {
          return (
            <Field
              key={item.id}
              id={item.id}
              type={item.type}
              imageSrc={item.imageSrc}
              score={item.score}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GamePage;
