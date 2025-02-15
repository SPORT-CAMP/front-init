import headerStyles from './header.module.css';
import Burger from '@/components/ui/burger/Burger';
import Navigation from '@/components/ui/navigation/Navigation';

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className="container">
        <div className="section">
          <div className={headerStyles.headerWrapper}>
            <div>LOGO</div>
            <div>
              <Burger />
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
