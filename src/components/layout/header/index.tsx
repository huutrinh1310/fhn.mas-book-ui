import InputElement from "@/components/shared/input-element";
import styles from "./index.module.scss";
import IconComponent from "@/components/shared/icon";
import { NotifyIcon } from "@/utils/icon";
import useAuth from "@/hooks/useAuth";
import BUILoading from "@/components/shared/loading";

export default function Header() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <>
      {isLoading && <BUILoading />}
      <header className={`${styles.header}`}>
        <div className={styles.input}>
          <InputElement type="text" secondary placeholder="Search..." />
        </div>
        <div className={`${styles.users}`}>
          <IconComponent
            children={NotifyIcon(24, 24)}
            className={styles.icon}
          />
          {isAuthenticated && (
            <a href="#" className={styles.users__information}>
              <span className={styles["users__information--avatar"]}>
                <img src="images/user.png" alt="User" />
              </span>
              <div className={styles["users__information--welcome"]}>
                <label>Welcome,</label>
                <b>Lavender</b>
              </div>
            </a>
          )}
        </div>
      </header>
    </>
  );
}
