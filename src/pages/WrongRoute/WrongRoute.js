import styles from './WrongRoute.module.scss';
import LinkButton from 'components/LinkButton';
import appRoutes from 'routes';

const WrongRoute = () => {
  return (
    <div className={styles.wrapper}>
      <h1>This page does not exist</h1>
      <LinkButton text="Go Home" path={appRoutes.ROOT} />
    </div>
  );
};

export default WrongRoute;
