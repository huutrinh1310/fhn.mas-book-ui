import * as React from "react";
import { Box } from "@mui/material";
import { theme } from "@/theme";

export interface IPageContentProps {
  children: React.ReactNode;
}

export default function PageContent(props: IPageContentProps) {
  return (
    <Box
      component={"main"}
      display={"flex"}
      borderRadius={"30px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      alignSelf={"stretch"}
      padding={"40px 50px"}
      gap={"30px"}
      height={"calc( 100vh - 80px - 20px )"}
      sx={{
        backgroundColor: theme.palette.primary.light,
        ">div": {
          maxHeight: "100%",
          overflow: "auto",
          justifyContent: "unset",
          marginRight: "-25px",
          paddingRight: "25px",
        },
      }}
    >
      {props.children}
    </Box>
  );
}
