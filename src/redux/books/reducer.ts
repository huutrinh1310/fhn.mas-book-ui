import { Book } from "@/types/book.model";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BooksState {
    book: Book | null;
    books: Book[];
}

const initialState: BooksState = {
    book: null,
    books: [],
}

const BookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks(state, action: PayloadAction<Book[]>) {
            state.books = action.payload;
        },

        setBook(state, action: PayloadAction<Book>) {
            state.book = action.payload;
        },

        addBook(state, action: PayloadAction<Book>) {
            state.books.push(action.payload);
        },

        updateBook(state, action: PayloadAction<Book>) {
            const index = state.books.findIndex(book => book.id === action.payload.id);
            if (index !== -1) {
                state.books[index] = action.payload;
            }
        },

        removeBook(state, action: PayloadAction<number>) {
            const index = state.books.findIndex(book => book.id === action.payload);

            if (index !== -1) {
                state.books.splice(index, 1);
            }
        },
    }
});

export const {
    setBooks,
    setBook,
    updateBook,
    removeBook,
    addBook
} = BookSlice.actions;

export default BookSlice.reducer;