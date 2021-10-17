import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { Routes } from './routes';

import './styles/variables.scss';
import './styles/global.scss';
import './styles/app-styles.scoped.scss';

export function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes />
      </main>
    </BrowserRouter>
  );
}

