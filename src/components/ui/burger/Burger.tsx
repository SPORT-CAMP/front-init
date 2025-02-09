'use client';
import burgerStyles from './burger.module.css';
import { useState } from 'react';

// TODO открытие меню, анимация бургера
export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${burgerStyles.burger} ${burgerStyles.transformToBurger} ${isOpen ? burgerStyles.transformToCross : ''}`}
    >
      <button
        role="menu"
        type="button"
        className={`${burgerStyles.btn} btn`}
        aria-label="open-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span key={1} className={`${burgerStyles.line} ${burgerStyles.lineTop}`} />
        <span key={2} className={`${burgerStyles.line} ${burgerStyles.lineMiddle}`} />
        <span key={3} className={`${burgerStyles.line} ${burgerStyles.lineBottom}`} />
      </button>
    </div>
  );
}
