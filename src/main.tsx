import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';

import App from './App';
import { ThemeProvider } from '@/context/ThemeContext';

import './index.css';

const basename = import.meta.env.BASE_URL;

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <ThemeProvider>
          <BrowserRouter basename={basename}>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </LazyMotion>
    </MotionConfig>
  </StrictMode>
);