import Cans from "../cans/Cans";
import Field from "../field/Field";
import wasteItems from "../../server/db.json";
import styles from "./GamePage.module.css";
import React, { useState, useEffect } from "react";

console.log(wasteItems);

function GamePage() {
  const [newItemList, setNewItemList] = useState([]);
  const [randomList, setRandomList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  shuffle(wasteItems);

  useEffect(() => {
    const itemList = [wasteItems].slice(startIndex, 3);
    setStartIndex(startIndex + 1);
    setNewItemList(itemList);

    // setTimeout(() => {
    //   setShowHighscore(true);
    // }, 5000);
  }, []);

  function handleDragEnd({ id }) {
    const deleteFromList = randomList.filter((item) => +item.id === +id);
    setRandomList(deleteFromList);
  }
  console.log(handleDragEnd);

  return (
    <div className={styles.container}>
      <div className={styles.cans}>
        <Cans />
      </div>
      <div className={styles.fields} id="cardholder">
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
