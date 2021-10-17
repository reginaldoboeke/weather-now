import logoImg from '../../assets/images/logo.svg';

import './styles.scoped.scss';

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="WeatherNow" />
    </header>
  );
}