import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GlobalState {
    loading: boolean;
    error: string | null;
}

const initialState: GlobalState = {
    loading: false,
    error: null,
}

const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },

        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        }
    }
})

export const {
    setLoading,
    setError
} = GlobalSlice.actions;

export default GlobalSlice.reducer;