import styles from './PageWrapper.module.scss';
import Error from '../Error';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';

const PageWrapper = observer(({ children, errorHandler }) => {
  const store = useStore();

  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        {!!store.error.requestError.length > 0 ? (
          <Error errorHandler={errorHandler} />
        ) : (
          children
        )}
      </main>
    </div>
  );
});

export default PageWrapper;
