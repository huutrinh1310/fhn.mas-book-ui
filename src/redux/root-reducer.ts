import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/reducer';
import globalReducer from './global-state/reducer';

const rootReducer = combineReducers({
    books: booksReducer,
    globalStyles: globalReducer,
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
