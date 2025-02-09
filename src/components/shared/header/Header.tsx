import headerStyles from './header.module.css';
import Burger from '@/components/ui/burger/Burger';
export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className="container">
        <div className="section">
          <div className={headerStyles.headerWrapper}>
            <div>LOGO</div>
            <Burger />
          </div>
        </div>
      </div>
    </header>
  );
}
