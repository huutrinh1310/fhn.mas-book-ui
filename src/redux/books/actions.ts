import * as api from '@/services/bookService';
import { AppDispatch } from "../store";
import {
    setBooks,
    setBook,
    addBook,
    updateBook as updateBookAction,
    removeBook,
} from './reducer';
import { Book } from '@/types/book.model';
import { BUIToastComponents, ToastifyType } from '@/library/toastify';
import { setError, setLoading } from '../global-state/reducer';

export const getBooks = async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const response = await api.getBooks().then(res => {
        return res.data;
    }
    ).catch(err => {
        dispatch(setError(err));
        return [];
    })
    dispatch(setBooks(response));
    dispatch(setLoading(false));
    return response;
}

export const getBook = async (id: number, dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const response: Book = await api.getBook(id).then(res => {
        return res.data;
    }).catch((err: Error) => {
        dispatch(setError(err.message));
        return [];
    })
    dispatch(setBook(response));
    dispatch(setLoading(false));
    return response;
}

export const createBook = async (data: Book, dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const response = await api.createBook(data).then(res => {
        BUIToastComponents('Add book to list successfully!', ToastifyType.SUCCESS);

        return res.data;
    }
    ).catch((err: Error) => {
        dispatch(setError(err.message));
        BUIToastComponents('Add book to list fail!', ToastifyType.ERROR);
        return [];
    })
    dispatch(addBook(response));
    dispatch(setLoading(false));
    return response;
}

export const updateBook = async (id: number, data: Book, dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const response = await api.updateBook(id, data).then(res => {
        BUIToastComponents('Update book successfully!', ToastifyType.SUCCESS);
        return res.data;
    }
    ).catch((err: Error) => {
        dispatch(setError(err.message));
        BUIToastComponents('Update book fail!', ToastifyType.ERROR);
        return [];
    })
    dispatch(updateBookAction(response));
    dispatch(setLoading(false));
    return response;
}

export const deleteBook = async (id: number, dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const response: Book = await api.deleteBook(id).then(res => {
        BUIToastComponents('Delete book successfully!', ToastifyType.SUCCESS);
        return res.data[0];
    }
    ).catch((err: Error) => {
        dispatch(setError(err.message));
        BUIToastComponents('Delete book fail!', ToastifyType.ERROR);
        return [];
    })
    dispatch(removeBook(id));
    dispatch(setLoading(false));
    return response;
}