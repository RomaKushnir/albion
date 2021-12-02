import styles from './PageLayout.module.scss';
import { Outlet } from 'react-router-dom';

function PageLayout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
