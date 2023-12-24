import { ChipProps, styled, Chip as ChipMui } from "@mui/material";
import { useState } from "react";

type ChipType =
  | "error"
  | "primary"
  | "default"
  | "secondary"
  | "info"
  | "success"
  | "warning";

type ChipSize = "small" | "medium" | "large";
export interface IChipProps extends ChipProps {
  color?: ChipType;
  sizeChip?: ChipSize;
}

const ChipCustom = styled(ChipMui)<ChipProps>(({ theme, ...props }) => ({
  borderRadius: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&.MuiChip-sizeMedium": {
    height: "32px",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "20px",
    padding: "0 12px",
  },
  "&.MuiChip-sizeLarge": {
    height: "40px",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    padding: "0 16px",
  },
  "&.MuiChip-sizeSmall": {
    height: "24px",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "16px",
    padding: "0 8px",
  },
}));

export default function Chip({
  disabled = false,
  sizeChip,
  ...props
}: IChipProps) {
  const sizeChipToClass = (sizeChip?: ChipSize) => {
    switch (sizeChip) {
      case "small":
        return "MuiChip-sizeSmall";
      case "medium":
        return "MuiChip-sizeMedium";
      case "large":
        return "MuiChip-sizeLarge";
      default:
        return "";
    }
  };

  return (
    <ChipCustom
      className={sizeChipToClass(sizeChip)}
      {...props}
    />
  );
}
