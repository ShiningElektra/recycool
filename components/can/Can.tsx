import styles from "../can/Can.module.css";

export type CanProps = {
  type: "paper" | "recycle" | "residual";
};

function Can({ type }: CanProps) {
  const drop = (e) => {
    e.preventDefault();
    const fieldType = e.dataTransfer.getData("fieldType");

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
      <div className={styles[type]} onDrop={drop} onDragOver={dragOver}></div>
    </div>
  );
}

export default Can;
