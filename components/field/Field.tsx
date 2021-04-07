import styles from "./Field.module.css";
import React from "react";
import { APIWaste } from "../../utils/api";

function Field({ id, type, imageSrc, score }: APIWaste) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("fieldId", id);
    e.dataTransfer.setData("fieldType", type);
    e.dataTransfer.setData("fieldScore", score);

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
  );
}
export default Field;
