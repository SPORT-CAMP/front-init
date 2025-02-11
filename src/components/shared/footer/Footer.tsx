import wrapperStyle from '../../../styles/utils/wrapper-centered.module.scss';
import footerStyle from './footer.module.scss';

import VkIcon from '../../../assets/img/icons/vk-icon.svg';
import TelegramIcon from '../../../assets/img/icons/telegram.svg';
import PhoneIcon from '../../../assets/img/icons/phone.svg';

export default function Footer() {
  return (
    <footer className={`footer ${footerStyle.footer}`}>
      <div className="section">
        <div className="container">
          <div className={footerStyle.sectionInner}>
            <div className={footerStyle.column}>
              <h2 className={footerStyle.column__title}>Контакты</h2>
              <div className={footerStyle.contactTop}>
                <a href="https://vk.com/media_ice">
                  <VkIcon />
                </a>
                <a href="">
                  <TelegramIcon />
                </a>
              </div>
              <div>
                <a
                  href="tel:+78005552550"
                  className={`${wrapperStyle.centered} ${wrapperStyle.centeredVertical} ${footerStyle.gap1Rem}`}
                >
                  <span className="small-icon">
                    <PhoneIcon />
                  </span>
                  <span>8 800 555-25-50</span>
                </a>
              </div>
            </div>
            <div className={footerStyle.column}>
              <h2 className={footerStyle.column__title}>Сборы</h2>
              <nav>
                <ul className={footerStyle.navList}>
                  <li className={footerStyle.navItem}>
                    <a href="/workout-plan">Программа сборов</a>
                  </li>
                  <li className={footerStyle.navItem}>
                    <a href="/summer-camp">Летние сборы</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
