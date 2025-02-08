import styles from './not-found.module.scss';
import Link from 'next/link';
export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <div className={`${styles.backgroundImage}`}></div>
        <div className={styles.warning}>404</div>
      </div>
      <div>
        <h1 className={styles.h1}>Страница не найдена</h1>
        <p className={styles.text}>
          Предлагаем{' '}
          <Link href="/" className="link">
            вернуться на главную страницу
          </Link>
        </p>
      </div>
    </main>
  );
}
