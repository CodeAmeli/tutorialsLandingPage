import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from './pages/Main.tsx';
import GlobalStyle from './styles/global.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <Main />
  </StrictMode>,
)
