import { Box } from "@mui/material";
import styles from "./index.module.scss";

export default function BUILoading() {
  return (
    <Box className={styles["loading-background"]}>
      <Box className={styles.loading}></Box>
    </Box>
  );
}
