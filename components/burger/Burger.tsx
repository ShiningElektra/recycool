import styles from "../burger/Burger.module.css";

// export type BurgerProps = {
//   primary: boolean;
// };

const Burger = () => {
  return (
    <div className={`${styles.burger}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Burger;
