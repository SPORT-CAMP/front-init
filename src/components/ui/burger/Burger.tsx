'use client';
import burgerStyles from './burger.module.css';
import { useEffect, useState } from 'react';
import { useMainMenuContext } from '@/context/main-menu-context';

export default function Burger() {
  const { isOpen, setIsOpen } = useMainMenuContext();
  const [body, setBody] = useState<Element | null>(null);

  const onBurgerClick = () => {
    setIsOpen(!isOpen);
    console.log(document.querySelector('.body'));
    if (body) {
      body.classList.toggle('body-freeze');
    }
  };

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
