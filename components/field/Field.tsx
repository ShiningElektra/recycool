import { APIWaste } from "../../utils/api";
import styles from "./Field.module.css";
import React, { useEffect, useState } from "react";
import wasteItems from "../../utils/items.json";

console.log(wasteItems["waste-items"]);

function Field({ id, type, imageSrc, score }: APIWaste) {
  // const [items, setItems] = useState<APIWaste[]>([])

  // useEffect(() => {
  //   fetch("/api/waste-items")
  //   .then((data) => data.json)
  //   .then((items: APIWaste[] => setItems));
  // },[]);

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
      {/* {items.map((Item: APIWaste) => (
        <img className={styles.item} src={item.imageSrc} />
      ))} */}
      <img className={styles.item} src={imageSrc} />
    </div>
  );
}
export default Field;

// import { APIWaste } from "../../utils/api";
// import styles from "./Field.module.css";
// import React from "react";

// function Field({ id, type, imageSrc, score }: APIWaste) {
//   const dragStart = (e) => {
//     const target = e.target;
//     e.dataTransfer.setData("waste", JSON.stringify({ id, type, score }));

//     setTimeout(() => {
//       target.style.display = "none";
//     }, 0);
//   };

//   const dragOver = (e) => {
//     e.stopPropagation();
//   };
//   return (
//     <div
//       className={styles.field}
//       draggable={true}
//       onDragStart={dragStart}
//       onDragOver={dragOver}
//     >
//       <img className={styles.item} src={imageSrc} />
//     </div>
//   );
// }
// export default Field;
