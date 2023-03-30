import { createGlobalStyle } from 'styled-components';

/** Base theme */

export const theme = {
    backgroundPrimary: '#F5F5F5',
    backgroundSecondary: '#E6E9EC',
    textPrimary: '#343a40',
    textSecondary: '#6c757d',
    border: '#D3D9DD'
};

/** Global / default styles */

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: ${theme.backgroundPrimary};
        color: ${theme.textPrimary};
        font-family: 'Roboto', sans-serif;
    }

    p {
        color: ${theme.textPrimary};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default GlobalStyle;
