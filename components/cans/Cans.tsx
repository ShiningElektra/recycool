import styles from "./Cans.module.css";
import Can from "../can/Can";

function Cans() {
  return (
    <div className={styles.container}>
      <Can type="residual" className="canresidual"></Can>
      <Can type="recycle" className="canrecycle"></Can>
      <Can type="paper" className="canpaper"></Can>
    </div>
  );
}
export default Cans;
