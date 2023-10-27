import { IBookFormValues } from '@/pages/books/components/form';
import * as yup from 'yup';

const REQUIRED_MSG = 'This field is required';
const INVALID_MSG = 'Invalid value';
const POSITIVE_NUMBER_MSG = 'The value must be a positive number';
const BOOK_CODE_LENGTH = 5;
const BOOK_CODE_REGEX = new RegExp(`^B[0-9]{${BOOK_CODE_LENGTH}}$`);


export const bookSchema: yup.ObjectSchema<IBookFormValues> = yup.object().shape({
    code: yup.string().required(REQUIRED_MSG),
    title: yup.string().required(REQUIRED_MSG),
    author: yup.string().required(REQUIRED_MSG),
    price: yup.number(
    ).required(REQUIRED_MSG).positive(POSITIVE_NUMBER_MSG).typeError(INVALID_MSG),
});
