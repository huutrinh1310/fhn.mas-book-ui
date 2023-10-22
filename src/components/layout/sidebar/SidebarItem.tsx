import IconComponent from "@/components/shared/icon";
import * as React from "react";
import styles from "./index.module.scss";

import { NavLink } from "react-router-dom";

export interface ISidebarItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

export default function SidebarItem({ icon, label, link }: ISidebarItemProps) {
  return (
    <li className={styles["sidebar-item"]}>
      <NavLink
        to={link}
        className={({ isActive }) => {
          if (isActive) {
            return styles["sidebar-item"] + " " + styles["active"];
          } else {
            return styles["sidebar-item"];
          }
        }}
      >
        <IconComponent children={icon} className={styles["sidebar-icon"]} />
        <span>{label}</span>
      </NavLink>
    </li>
  );
}
