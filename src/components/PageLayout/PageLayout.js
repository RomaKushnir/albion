import styles from './PageLayout.module.scss';
import { Outlet } from 'react-router-dom';

function PageLayout() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;
