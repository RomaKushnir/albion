import styles from './PageWrapper.module.scss';

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default PageWrapper;
