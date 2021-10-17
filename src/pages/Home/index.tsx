import { Header } from '../../components/Header';
import { WeatherCard } from '../../components/WeatherCard';

import './styles.scoped.scss';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <WeatherCard title="Nuuk, GL" location="Nuuk" color="text-blue"/>
          <WeatherCard title="Urubici, BR" location="Urubici" color="text-orange"/>
          <WeatherCard title="Nairobi, KE" location="Nairobi" color="text-red"/>
        </section>
      </main>
    </>
  );
}