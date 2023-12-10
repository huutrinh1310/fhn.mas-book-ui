import * as React from "react";
import { Box, styled } from "@mui/material";

export interface IIconComponentProps {
  children?: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}
const IconComponent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<IIconComponentProps>(({ active, theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.common.white,
  cursor: "pointer",
  ...(active && {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
  }),
}));

export default IconComponent;
