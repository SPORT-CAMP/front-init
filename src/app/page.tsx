import pageStyles from './page.module.scss';
import wrapperStyles from '../styles/utils/wrapper-centered.module.scss';

import TeamIcon from '../assets/img/icons/team.svg';
import DifficultiesIcon from '../assets/img/icons/difficulties.svg';
import VictoryIcon from '../assets/img/icons/victory.svg';
import MultiStarIcon from '../assets/img/icons/multi-star.svg';
import LongArrowRight from '../assets/img/icons/long-arrow-right.svg';

export default function Home() {
  return (
    <main>
      <div className={pageStyles.hero}>
        <div className={`section ${pageStyles.section}`}>
          <div className={pageStyles.sectionInner}>
            <div className={pageStyles.wrapperMultiStar}>
              <MultiStarIcon />
            </div>
            <h1 className={`h1 ${pageStyles.pageTitle}`}>
              Сборы <br /> по <span className={pageStyles.highlight}>фигурному катанию</span> на
              коньках&nbsp;в&nbsp;Питере
            </h1>
            <div className={wrapperStyles.centered}>
              <ul className={pageStyles.list}>
                <li className={pageStyles.listItem}>
                  <TeamIcon />
                  Тренируйся с командой профессионалов.
                </li>
                <li className={pageStyles.listItem}>
                  <DifficultiesIcon />
                  Преодолевай сложности и преграды на пути к вершинам мастерства.
                </li>
                <li className={pageStyles.listItem}>
                  <VictoryIcon />
                  Становись лучшим и побеждай.
                </li>
              </ul>
            </div>
            <button className={`btn ${pageStyles.btn}`}>
              ЗАДАТЬ ВОПРОСЫ
              <LongArrowRight />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
