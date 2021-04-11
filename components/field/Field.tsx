import { APIWaste } from "../../utils/api";
import styles from "./Field.module.css";
import React from "react";

function Field({ id, type, imageSrc, score }: APIWaste) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("waste", JSON.stringify({ id, type, score }));

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={styles.field}
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <img className={styles.item} src={imageSrc} />
    </div>
    // {...item}
  );
}
export default Field;

/*export default function Field({ imageSrc }: APIWaste) {
  return (
    <div className={styles.field}>
      <img className={styles.item} src={imageSrc} />
    </div>
  );
}*/
