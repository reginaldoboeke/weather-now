import { WeatherCard } from '../../components/WeatherCard';

import './styles.scoped.scss';

export function Home() {
  return (
    <section>
      <WeatherCard title="Nuuk, GL" locale="Nuuk" />
      <WeatherCard title="Urubici, BR" locale="Urubici" />
      <WeatherCard title="Nairobi, KE" locale="Nairobi" />
    </section>
  );
}