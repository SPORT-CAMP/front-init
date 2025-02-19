'use client';

import navigationStyle from './navigation.module.scss';
import Link from 'next/link';

export default function Navigation() {
  const isOpen = true;
  const closeNavigation = () => {
    return false;
  };

  return (
    <nav className={`${navigationStyle.mainMenu} ${!isOpen ? navigationStyle.close : ''}`}>
      <div className={navigationStyle.body}>
        <h3 className={`h3 ${navigationStyle.title}`}>Меню</h3>
        <ul className={navigationStyle.list}>
          <li className={navigationStyle.item}>
            <Link onClick={closeNavigation} className={navigationStyle.link} href="/">
              Главная
            </Link>
          </li>
          <li className={navigationStyle.item}>
            <Link onClick={closeNavigation} className={navigationStyle.link} href="#team">
              Команда
            </Link>
          </li>
          <li className={navigationStyle.item}>
            <Link onClick={closeNavigation} className={navigationStyle.link} href="#camp-plan">
              Программа сборов
            </Link>
          </li>
          <li className={navigationStyle.item}>
            <Link onClick={closeNavigation} className={navigationStyle.link} href="#camp">
              Сборы
            </Link>
          </li>
          <li className={navigationStyle.item}>
            <Link onClick={closeNavigation} className={navigationStyle.link} href="#contact">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
