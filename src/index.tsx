import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyle from 'globalStyle';

import App from 'App';

const domNode = document.getElementById('root');
const root = createRoot(domNode as Element);

root.render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>
);
