
import { ENDPOINT } from "@/constants/endpoint";
import { axiosClient } from "@/library/axios";

export const getBooks = async () => {
    return await axiosClient.get(ENDPOINT.BOOKS);
}

export const getBook = async (id: number) => {
    return await axiosClient.get(ENDPOINT.BOOK(id));
}

export const createBook = async (data: any) => {
    return await axiosClient.post(ENDPOINT.BOOKS, data);
}

export const updateBook = async (id: number, data: any) => {
    return await axiosClient.put(ENDPOINT.BOOK(id), data);
}

export const deleteBook = async (id: number) => {
    return await axiosClient.delete(ENDPOINT.BOOK(id));
}