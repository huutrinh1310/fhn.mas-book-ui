import { Box, darken, styled } from "@mui/material";
import * as React from "react";

export interface IIconSidebarProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

const IconSidebar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<IIconSidebarProps>(({ active, theme }) => ({
  borderRadius: "10px",
  width: "46px",
  height: "46px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.common.white,
  cursor: "pointer",
  ...(active && {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: darken(theme.palette.primary.main, 0.3),
    },
  }),
  "&:hover": {
    backgroundColor: darken(theme.palette.common.white, 0.3),
  },
}));

export default IconSidebar;
