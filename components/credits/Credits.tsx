import styles from "../credits/Credits.module.css";
import Cans from "../cans/Cans";
import { useEffect, useState } from "react";
import { APIWaste } from "../../utils/api";

function Credits() {
  const [credits, setCredits] = useState<APIWaste[]>([]);

  useEffect(() => {
    fetch("/api/APIWaste")
      .then((data) => data.json())
      .then((credits: APIWaste[]) => setCredits(credits));
  });

  return (
    <div className={styles.container}>
      <div className={styles.cans}>
        <Cans />
      </div>
      <div className={styles.fields} id="cardholder">
        {credits.map((credit: APIWaste) => (
          <div key={credit.id}>
            Hier sollen die credits hin: {credit.credits}
          </div>
        ))}
        ); )
      </div>
    </div>
  );
}

export default Credits;
