'use client';

import { MainMenuProvider } from '@/context/main-menu-context';

import Burger from '@/components/ui/burger/Burger';
import Navigation from '@/components/ui/navigation/Navigation';
import headerStyles from './header.module.css';

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className="container">
        <div className="section">
          <div className={headerStyles.headerWrapper}>
            <div>LOGO</div>
            <div>
              <MainMenuProvider>
                <Burger />
                <Navigation />
              </MainMenuProvider>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
