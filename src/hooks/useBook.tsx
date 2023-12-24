import * as bookApi from "@/redux/books/actions";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Book } from "@/types/book.model";

export default function useBook() {
  const { books, book } = useAppSelector((state) => state.books);
  const loading = useAppSelector((state) => state.globalStyles.loading);
  const error = useAppSelector((state) => state.globalStyles.error);

  const dispatch = useAppDispatch();

  const getBooks = () => {
    return bookApi.getBooks(dispatch);
  };

  const getBook = (id: number) => {
    return bookApi.getBook(id, dispatch);
  };

  const addBook = (data: Book) => {
    return bookApi.createBook(data, dispatch);
  };
  const updateBook = (data: Book, id: number) => {
    return bookApi.updateBook(id, data, dispatch);
  };

  const deleteBook = async (id: number) => {
    return await bookApi.deleteBook(id, dispatch);
  };

  return {
    books,
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
    book,
    loading,
    error,
  };
}
