import { BrowserRouter } from 'react-router-dom';

import { AppHeader } from './components/AppHeader';
import { Routes } from './routes';

import './styles/variables.scss';
import './styles/global.scss';
import './styles/app-styles.scoped.scss';

export function App() {
  return (
    <BrowserRouter>
      <AppHeader />

      <main>
        <Routes />
      </main>
    </BrowserRouter>
  );
}

