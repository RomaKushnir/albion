import styles from './WrongRoute.module.scss';
import PageWrapper from 'components/PageWrapper';
import { Link } from 'react-router-dom';
import appRoutes from 'routes';

const WrongRoute = () => {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <h1>This page does not exist</h1>
        <Link
          to={appRoutes.ROOT}
          className="ant-btn ant-btn-primary ant-btn-lg"
        >
          Go Home
        </Link>
      </div>
    </PageWrapper>
  );
};

export default WrongRoute;
