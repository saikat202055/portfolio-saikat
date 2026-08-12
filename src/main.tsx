import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';

import App from './App';
import { ThemeProvider } from '@/context/ThemeContext';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

import './index.css';

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <ThemeProvider>
          <LoadingScreen />
          <BrowserRouter basename={basename}>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </LazyMotion>
    </MotionConfig>
  </StrictMode>
);