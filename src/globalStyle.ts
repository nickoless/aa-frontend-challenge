import { createGlobalStyle } from 'styled-components';

/** Base theme */

export const theme = {
    backgroundPrimary: '#F5F5F5',
    backgroundSecondary: '#E6E9EC',
    textPrimary: '#343a40',
    textSecondary: '#6c757d',
    highlight: '#612CE8',
    border: '#D3D9DD'
};

/** Global / default styles */

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: ${theme.backgroundSecondary};
        color: ${theme.textPrimary};
        font-family: 'Lato', sans-serif;
    }

    p {
        color: ${theme.textPrimary};
    }
`;

export default GlobalStyle;
