import { theme } from "@/theme";
import styles from "./index.module.scss";
import { Box, Link } from "@mui/material";

export interface ISidebarProps {
  children?: React.ReactNode;
  open?: boolean;
}

export default function Sidebar({ children, open }: ISidebarProps) {
  const classnames = [styles.sidebar, open && styles["sidebar-open"]]
    .filter(Boolean)
    .join(" ");

  return (
    <Box component={"aside"} className={classnames}>
      <Link
        href="/"
        textAlign={"center"}
        display={"inline-block"}
        alignSelf={"center"}
        fontSize={"18px"}
        fontWeight={700}
        lineHeight={1.5}
        textTransform={"uppercase"}
        paddingY={"10px"}
        color={theme.palette.secondary.dark}
      >
        Logo
      </Link>
      <Box
        component={"ul"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {children}
      </Box>
    </Box>
  );
}
