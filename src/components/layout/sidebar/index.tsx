import styles from "./index.module.scss";

export interface ISidebarProps {
  children?: React.ReactNode;
  open?: boolean;
}

export default function Sidebar({ children, open }: ISidebarProps) {
  const classnames = [styles.sidebar, open && styles["sidebar-open"]]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={classnames}>
      <span className={styles.logo}>Logo</span>
      <ul className={styles["sidebar-items"]}>{children}</ul>
    </aside>
  );
}
