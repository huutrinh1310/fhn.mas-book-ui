<<<<<<< HEAD
import { Box } from "@mui/material";
import AgTable from "./component/datatable";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function UserPage() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={"40px"}
      width={"100%"}
      height={"100%"}
      className={"ag-theme-quartz"}
      component={"div"}
    >
      <AgTable />
    </Box>
  );
=======
export default function UserPage() {
  return <div>Hello User Page day</div>;
>>>>>>> 816f06cbb80556c477acd7c1fae4279a863c27ff
}
