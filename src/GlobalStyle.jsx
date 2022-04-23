import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --main: white;
        --secondary:rgb(34, 31, 31);
        --button: #00a046;
        --light-grey: #e3e8e5;
        --common-font-size: 14px;
    }

    p, span {
        font-size: var(--common-font-size)
    }
`;
