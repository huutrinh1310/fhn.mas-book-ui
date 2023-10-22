import styles from "./index.module.scss";

export default function BUILoading() {
  return (
    <div className={styles["loading-background"]}>
      <div className={styles.loading}></div>
    </div>
  );
}
