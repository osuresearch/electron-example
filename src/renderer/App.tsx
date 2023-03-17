import { RUIProvider } from '@osuresearch/ui';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppShell from './AppShell';
import './App.css';

export default function App() {
  const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

  return (
    <RUIProvider theme={prefersColorScheme?.matches ? 'dark' : 'light'}>
      <ThemeProvider theme={{}}>
        <Router>
          <Routes>
            <Route path="/" element={<AppShell />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RUIProvider>
  );
}
