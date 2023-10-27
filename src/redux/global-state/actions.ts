import { AppDispatch } from "../store";
import * as reducer from "./reducer";

export const setLoading = async (loading: boolean, dispatch: AppDispatch) => {
    dispatch(reducer.setLoading(loading));
}

export const setError = async (error: string | null, dispatch: AppDispatch) => {
    dispatch(reducer.setError(error));
}