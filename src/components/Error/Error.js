import styles from './Error.module.scss';
import ReloadButton from 'components/ReloadButton';
import { useStore } from 'store';

const Error = ({ errorHandler }) => {
  const store = useStore();

  const onError = () => {
    errorHandler();
    store.error.resetRequestError();
  };

  return (
    <div className={styles.errorWrapper}>
      <p>Oops, something went wrong ...</p>
      <ReloadButton text={'Try Again'} onUpdate={onError} />
    </div>
  );
};

export default Error;
