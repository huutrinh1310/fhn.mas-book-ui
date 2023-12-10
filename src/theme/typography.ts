import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/900.css';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
    fontFamily: [
        'Montserrat',
        'sans-serif',
    ].join(','),
    fontSize: 16,
    htmlFontSize: 16,
    h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.5
    },
    h2: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.5
    },
    h3: {
        fontSize: '1.875rem',
        fontWeight: 700,
        lineHeight: 1.5
    },
    h4: {
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1.5
    },
    h5: {
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: 1.5
    },
    h6: {
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: 1.5
    },
    subtitle1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5
    },
    subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.375
    },
    body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.2
    },
    body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.2
    },
    button: {
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.1px',
    },
    caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.5,
        letterSpacing: '0.1px',
        marginTop: '8px'
    },
    overline: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.5,
        letterSpacing: '0.1px',
        textTransform: 'uppercase'
    }
}

export default typography;