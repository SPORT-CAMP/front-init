import pageStyles from './page.module.scss';
import wrapperStyles from '../styles/utils/wrapper-centered.module.scss';

import TeamIcon from '../assets/img/icons/team.svg';
import DifficultiesIcon from '../assets/img/icons/difficulties.svg';
import VictoryIcon from '../assets/img/icons/victory.svg';
import MultiStarIcon from '../assets/img/icons/multi-star.svg';
import LongArrowRight from '../assets/img/icons/long-arrow-right.svg';
import GeoPointIcon from '../assets/img/icons/geo-point.svg';
import Carousel from '@/components/ui/swiper/swiper';
import PersonCard from '@/components/ui/cards/PersonCard';

export default function Home() {
  const coaches = [
    {
      index: 1,
      title: 'Петр Петров',
      textList: ['Тренер по прыжкам', 'Опыт 5 лет'],
      iconPath: '/img/test/chuck-norris.jpg',
      alt: 'Фото Петр',
    },
    {
      index: 2,
      title: 'Иван Иванов',
      textList: ['Тренер по скольжению', 'Опыт 5 лет'],
      iconPath: '/img/test/chuck-norris.jpg',
      alt: 'Фото Ивана',
    },
  ];

  const slides = coaches.map((item) => <PersonCard {...item} />);

  return (
    <main>
      <section className={`section ${pageStyles.section}`}>
        <div className="container">
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
              <span className="btn__icon">
                <LongArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>
      {/*  END hero */}

      <section id="team" className={`section ${pageStyles.section}`}>
        <div className="container">
          <h2 className={`${pageStyles.title} ${pageStyles.sectionTitle}`}>КОМАНДА</h2>
          <p className={pageStyles.text}>
            Сплоченная команда специалистов и&nbsp;единомышленников поможет спортсмену раскрыть свои
            сильные стороны и&nbsp;гармонично развить те&nbsp;аспекты, которые требуют
            дополнительного внимания и&nbsp;проработки.
          </p>
          <p className={pageStyles.text}>
            Поставит эффективную технику прыжков, реберное скольжение и&nbsp;динамичные вращения.
          </p>
          <Carousel slides={slides} />
        </div>
      </section>
      {/* END team */}

      <section
        id="camp-plan"
        className={`section ${pageStyles.section} ${pageStyles.sectionCampProgram}`}
      >
        <div className="container">
          <h2 className={`${pageStyles.title} ${pageStyles.sectionTitle}`}>программа сборов</h2>
        </div>

        <div
          className={`${pageStyles.subSection} ${pageStyles.fullWidth} ${pageStyles.subSectionCentered}`}
        >
          <div className={`${pageStyles.background} ${pageStyles.backgroundSkaterOnIce}`}>
            <div className={pageStyles.background__underlayer}></div>
          </div>
          <h3 className={`${pageStyles.title} ${pageStyles.subSectionTitle}`}>
            Ледовая подготовка
          </h3>
          <div className={wrapperStyles.centered}>
            <ul className={pageStyles.list}>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Постановка и корректировка техники исполнения прыжковых элементов
              </li>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Отработка вращений
              </li>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Тренировки по скольжению, в том числе разучивание тестов по скольжению
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${pageStyles.subSection} ${pageStyles.fullWidth} ${pageStyles.subSectionCentered}`}
        >
          <div className={`${pageStyles.background} ${pageStyles.backgroundSkaterInTheGym}`}>
            <div className={pageStyles.background__underlayer}></div>
          </div>
          <h3 className={`${pageStyles.title} ${pageStyles.subSectionTitle}`}>Тренировки в зале</h3>
          <div className={wrapperStyles.centered}>
            <ul className={pageStyles.list}>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Общая физическая подготовка (укрепление основных групп мышц, развитие аэробных
                возможностей, развитие координации, баланса)
              </li>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Специальная физическая подготовка (скоростно-силовые качества, взрывная сила,
                крутка)
              </li>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Хореография (классическая, танцы, растяжка)
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${pageStyles.subSection} ${pageStyles.fullWidth} ${pageStyles.subSectionCentered}`}
        >
          <div className={`${pageStyles.background} ${pageStyles.backgroundCoachAndSkaterOnIce}`}>
            <div className={pageStyles.background__underlayer}></div>
          </div>
          <h3 className={`${pageStyles.title} ${pageStyles.subSectionTitle}`}>
            Дополнительные тренировки
          </h3>
          <div className={wrapperStyles.centered}>
            <ul className={pageStyles.list}>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Вестибулярный тренажер
              </li>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Индивидуальные тренировки
              </li>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Постановка программ
              </li>
              <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                Тренировки на удочке
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="camp" className={`section ${pageStyles.section}`}>
        <div className="container">
          <h2 className={`${pageStyles.title} ${pageStyles.sectionTitle}`}>
            Тренировочный сбор{' '}
            <span className={pageStyles.highlight}>по специальной физической</span> подготовке
          </h2>
        </div>
        <article className="card">
          <div className="card__body">
            <div className="card__section">
              <h3 className="card__sub-title">Цели</h3>
              <ul className={pageStyles.list}>
                <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                  Развитие специальных физических качеств
                </li>
                <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                  Совершенствование техники исполнения элементов
                </li>
              </ul>
            </div>

            <div className="card__section">
              <h3 className="card__sub-title">Где</h3>
              <ul className={pageStyles.list}>
                <li className={pageStyles.listItem}>
                  <GeoPointIcon />
                  Санкт-Петербург, ДС&nbsp;им&nbsp;В.Б. Харламова
                </li>
              </ul>
            </div>

            <div className="card__section">
              <h3 className="card__sub-title">Для кого</h3>
              <ul className={pageStyles.list}>
                <li className={`${pageStyles.listItem} ${pageStyles.listItemDash}`}>
                  Спортсмены с 10 до 16 лет
                </li>
              </ul>
            </div>
            <button className={`btn card__btn`}>
              Записаться
              <span className="btn__icon">
                <LongArrowRight />
              </span>
            </button>
          </div>
        </article>
      </section>
      {/*  END camp */}
    </main>
  );
}
