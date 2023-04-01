import { createGlobalStyle } from 'styled-components';

/** Base theme */

export const theme = {
    backgroundPrimary: '#E6E9EC',
    backgroundSecondary: '#F5F5F5',
    textPrimary: '#343a40',
    textSecondary: '#6c757d',
    border: '#D3D9DD',
    highlight: '#612CE8',
    favorite: '#A83F39'
};

/** Global / default styles */

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: ${theme.backgroundPrimary};
        color: ${theme.textPrimary};
        font-family: 'Lato', sans-serif;
    }
`;

export default GlobalStyle;
