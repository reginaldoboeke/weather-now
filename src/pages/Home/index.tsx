import { useState } from 'react';
import { WeatherCard } from '../../components/WeatherCard';

import './styles.scoped.scss';

const initialLocales = [
  {
    title: 'Nuuk, GL',
    locale: 'Nuuk',
    isActive: false,
  },
  {
    title: 'Urubici, BR',
    locale: 'Urubici',
    isActive: true,
  },
  {
    title: 'Nairobi, KE',
    locale: 'Nairobi',
    isActive: false,
  },
];

export function Home() {
  const [locales, setLocales] = useState(initialLocales);

  function handleSetIsActive(locale: string) {
    const updatedLocales = locales.map(mapLocale => ({
      ...mapLocale,
      isActive: locale === mapLocale.locale,
    }));
    setLocales(updatedLocales);
  }

  function handleSetIsNotActive() {
    const updatedLocales = locales.map(mapLocale => ({
      ...mapLocale,
      isActive: false,
    }));
    setLocales(updatedLocales);
  }

  return (
    <section>
      {
        locales.map(locale => (
          <WeatherCard
            key={locale.locale}
            title={locale.title}
            locale={locale.locale}
            isActive={locale.isActive}
            onMouseEnter={() => handleSetIsActive(locale.locale)}
            onMouseLeave={handleSetIsNotActive}
          />
        ))
      }
    </section>
  );
}