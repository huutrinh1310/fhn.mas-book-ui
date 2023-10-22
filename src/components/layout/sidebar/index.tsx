import { NavLink } from "react-router-dom";
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
      <NavLink to="/" className={styles.logo}>
        Logo
      </NavLink>
      <ul className={styles["sidebar-items"]}>{children}</ul>
    </aside>
  );
}
