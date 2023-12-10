import useBook from "@/hooks/useBook";
import BookList from "./components/list";
import BookForm from "./components/form";
import { useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Swal from "sweetalert2";
import { setError } from "@/redux/global-state/actions";
import { Box, Typography, useTheme } from "@mui/material";

export default function BookPage() {
  const dispatch = useAppDispatch();
  const { books, getBooks } = useBook();
  const [searchParams] = useSearchParams("");
  const { error } = useAppSelector((state) => state.globalStyles);
  const navigate = useNavigate();
  const theme = useTheme();

  const showErrorMessage = useCallback(() => {
    Swal.fire({
      title: "Error!",
      text: error!,
      icon: "error",
      confirmButtonText: "OK",
    }).then(() => {
      setError(null, dispatch);
      navigate("/book");
    });
    return () => {};
  }, [error, navigate, dispatch]);

  useEffect(() => {
    const fetchBooks = async () => {
      await getBooks();
    };
    fetchBooks();
    if (error !== null && error !== "" && error?.length > 0) {
      showErrorMessage();
    }

    return () => {};
    //eslint-disable-next-line
  }, [searchParams, error]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={"40px"}
      width={"100%"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={"10px"}
      >
        <Typography
          variant={"h3"}
          component={"h3"}
          color={theme.palette.secondary.dark}
        >
          Welcome to My{" "}
          <Typography
            variant="h3"
            component={"span"}
            color={theme.palette.primary.main}
            sx={{
              display: "inline",
            }}
          >
            Bookstore!
          </Typography>
        </Typography>
        <Typography variant={"subtitle1"}>
          Oct 19, 2023 | Thursday, 11:00 AM
        </Typography>
      </Box>
      <BookForm />
      <BookList data={books} />
    </Box>
  );
}
