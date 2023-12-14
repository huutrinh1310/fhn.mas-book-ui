import styles from "./index.module.scss";
import IconComponent from "@/components/shared/icon";
import { NotifyIcon } from "@/utils/icon";
import useAuth from "@/hooks/useAuth";
import {
  alpha,
  Box,
  Button,
  Link,
  OutlinedInput,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

export default function Header() {
  const { isAuthenticated } = useAuth();
  const theme = useTheme();

  return (
    <>
      <Box
        component={"header"}
        padding={"18px 15px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"stretch"}
        position={"sticky"}
        top={0}
        sx={{ background: theme.palette.common.white }}
      >
        <Box
          minWidth={"200px"}
          width={"360px"}
          display={"flex"}
          alignItems={"flex-start"}
          alignSelf={"stretch"}
          gap={"10px"}
        >
          <OutlinedInput
            id="outlined-basic"
            placeholder="Search..."
            fullWidth
            sx={{
              borderRadius: "10px",
              position: "relative",
              backgroundColor: theme.palette.primary.light,
              border: `1px solid ${theme.palette.primary.light}`,
              transition: theme.transitions.create([
                "border-color",
                "background-color",
                "box-shadow",
              ]),
              "&:focus": {
                boxShadow: `${alpha(
                  theme.palette.primary.main,
                  0.25
                )} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
              },
              "> fieldset": {
                border: 0,
              },
              "> input": {
                padding: "10px 16px",
                fontSize: 16,
              },
            }}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"40px"}
        >
          {(isAuthenticated && (
            <>
              <IconComponent
                children={NotifyIcon(24, 24)}
                width={"25px"}
                height={"25px"}
                color={theme.palette.secondary.main}
                position={"relative"}
                sx={{
                  "&::before": {
                    content: "'3'",
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    width: "20px",
                    height: "20px",
                    color: theme.palette.common.white,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
              />
              <Link
                href="#"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                gap={"5px"}
              >
                <Box component={"span"}>
                  <img src="images/user.png" alt="User" />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                >
                  <Typography variant={"body1"} component={"label"}>
                    Welcome,
                  </Typography>
                  <Typography
                    variant={"h5"}
                    component={"b"}
                    color={theme.palette.secondary.dark}
                  >
                    Lavender
                  </Typography>
                </Box>
              </Link>
            </>
          )) || (
            <AuthenticationBox>
              <Button variant="outlined">Register</Button>
              <Button variant="contained">Login</Button>
            </AuthenticationBox>
          )}
        </Box>
      </Box>
    </>
  );
}

const AuthenticationBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& button": {
    margin: theme.spacing(0, 1),
  },
}));
