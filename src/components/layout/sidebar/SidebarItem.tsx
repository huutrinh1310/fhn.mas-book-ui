// import IconComponent from "@/components/shared/icon";
import * as React from "react";
import styles from "./index.module.scss";

import { NavLink } from "react-router-dom";
import IconSidebar from "@/components/shared/icon-sidebar";
import { ListItem, Typography } from "@mui/material";

export interface ISidebarItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

export default function SidebarItem({ icon, label, link }: ISidebarItemProps) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <NavLink
        to={link}
        className={({ isActive }) => {
          if (isActive) {
            return styles["sidebar-item"] + " " + styles["active"];
          } else {
            return styles["sidebar-item"];
          }
        }}
        children={({ isActive }) => {
          return (
            <>
              <IconSidebar className={styles["sidebar-icon"]} active={isActive}>
                {icon}
              </IconSidebar>
              <Typography component="span">{label}</Typography>
            </>
          );
        }}
      />
    </ListItem>
  );
}
