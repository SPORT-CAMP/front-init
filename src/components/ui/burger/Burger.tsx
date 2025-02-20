'use client';

import { useEffect, useState } from 'react';
import { useMainMenuContext } from '@/context/main-menu-context';

import burgerStyles from './burger.module.css';

export default function Burger() {
  const { isOpen, setIsOpen } = useMainMenuContext();
  const [body, setBody] = useState<Element | null>(null);

  const onBurgerClick = () => {
    setIsOpen(!isOpen);
    toggleBodyScrollLock();
  };

  function toggleBodyScrollLock() {
    if (body) {
      body.classList.toggle('body-no-scroll');
    }
  }

  useEffect(() => {
    const body = document.querySelector('.body');
    if (body) {
      setBody(body);
    }
  });

  return (
    <div
      className={`${burgerStyles.burger} ${burgerStyles.transformToBurger} ${isOpen ? burgerStyles.transformToCross : ''}`}
    >
      <button
        role="menu"
        type="button"
        className={`${burgerStyles.btn} btn`}
        aria-label="open-navigation"
        onClick={() => onBurgerClick()}
      >
        <span key={1} className={`${burgerStyles.line} ${burgerStyles.lineTop}`} />
        <span key={2} className={`${burgerStyles.line} ${burgerStyles.lineMiddle}`} />
        <span key={3} className={`${burgerStyles.line} ${burgerStyles.lineBottom}`} />
      </button>
    </div>
  );
}
