import styles from "./index.module.scss";
import IconComponent from "@/components/shared/icon";
import { NotifyIcon } from "@/utils/icon";
import useAuth from "@/hooks/useAuth";
import { InputMui } from "@/components/shared/mui-component/InputMui";
import { Button, styled } from "@mui/material";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.input}>
          <InputMui
            type="text"
            placeholder="Search..."
            sx={{
              width: "100%",
            }}
          />
        </div>
        <div className={`${styles.users}`}>
          {(isAuthenticated && (
            <>
              <IconComponent
                children={NotifyIcon(24, 24)}
                className={styles.icon}
              />
              <a href="#" className={styles.users__information}>
                <span className={styles["users__information--avatar"]}>
                  <img src="images/user.png" alt="User" />
                </span>
                <div className={styles["users__information--welcome"]}>
                  <label>Welcome,</label>
                  <b>Lavender</b>
                </div>
              </a>
            </>
          )) || (
            <AuthenticationBox>
              <Button variant="outlined">Register</Button>
              <Button variant="contained">Login</Button>
            </AuthenticationBox>
          )}
        </div>
      </header>
    </>
  );
}

const AuthenticationBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& button": {
    margin: theme.spacing(0, 1),
  },
}));
