import styles from "./Cans.module.css";
import Can from "../can/Can";

function Cans() {
  return (
    <div className={styles.container}>
      <Can type="residual"></Can>
      <Can type="recycle"></Can>
      <Can type="paper"></Can>
    </div>
  );
}
export default Cans;
