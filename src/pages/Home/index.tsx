import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { WeatherCard } from '../../components/WeatherCard';

import './styles.scoped.scss';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <WeatherCard title="Nuuk, GL" locale="Nuuk" />
          <WeatherCard title="Urubici, BR" locale="Urubici" />
          <WeatherCard title="Nairobi, KE" locale="Nairobi" />
        </section>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </main>
    </>
  );
}