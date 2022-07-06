import { createGlobalStyle } from 'styled-components';
// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

const GlobaStyles = createGlobalStyle`
    :root {
        --darkBlue_1: #3b447a;
        --darkBlue_2: #222B5F;
        --darkBlue_3: #0A0F19;
        --darkBlue_4: #101826;
        --mediumSlateBlue: #6C62E2;
        --lighBlue_1: #F3F1FE;
        --lighBlue_2: #ADBDE3;
        --white: #FFFFFF;
        --black: #000000;
    }

    html {
        font-size: 10px;
    }

    body {
        background-color: var(--lighBlue_1);
        font-family: 'Poppins', 'sans-serif';
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul, li {
        list-style: none;
    }

    .container {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
    }

    img, svg {
        width: 100%;
        height: 100%;
    }
`;

export default GlobaStyles;
