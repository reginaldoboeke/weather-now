import logoImg from '../../assets/images/logo.svg';

import './styles.scoped.scss';

export function AppHeader() {
  return (
    <header>
      <img src={logoImg} alt="WeatherNow Logo" />
    </header>
  );
}