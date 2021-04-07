import styles from "../can/Can.module.css";

export type CanProps = {
  type: "paper" | "recycle" | "residual";
  className: string;
};

function Can({ type, className }: CanProps) {
  const drop = (e) => {
    e.preventDefault();
    const fieldId = e.dataTransfer.getData("fieldId");
    const fieldType = e.dataTransfer.getData("fieldType");
    const fieldScore = e.dataTransfer.getData("fieldScore");

    if (type === fieldType) {
      alert("Correct");
    } else {
      alert("Not Correct");
    }
    // const card = document.getElementById(card_id);
    // card.style.display = 'block';

    // e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div
        className={styles[className]}
        onDrop={drop}
        onDragOver={dragOver}
      ></div>
    </div>
  );
}

export default Can;
