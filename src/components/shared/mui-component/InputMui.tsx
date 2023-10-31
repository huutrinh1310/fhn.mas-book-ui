import { InputBase, alpha, styled } from "@mui/material";

export const InputMui = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.light}`,
    fontSize: 16,
    padding: "10px 12px",
    width: "100%",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
