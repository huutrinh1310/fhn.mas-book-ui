import useBook from "@/hooks/useBook";
import BookList from "./components/list";
import styles from "./index.module.scss";
import BookForm from "./components/form";
import { useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Swal from "sweetalert2";
import { setError } from "@/redux/global-state/actions";

export default function BookPage() {
  const dispatch = useAppDispatch();
  const { books, getBooks } = useBook();
  const [searchParams] = useSearchParams("");
  const { error } = useAppSelector((state) => state.globalStyles);
  const navigate = useNavigate();

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
    <div className={styles["bs-books"]}>
      <div className={styles["bs-books__banner"]}>
        <h1 className={styles["bs-books__banner--title"]}>
          Welcome to My <span>Bookstore!</span>
        </h1>
        <p className={styles["bs-books__banner--datetime"]}>
          Oct 19, 2023 | Thursday, 11:00 AM
        </p>
      </div>
      <BookForm />
      <BookList data={books} />
    </div>
  );
}
