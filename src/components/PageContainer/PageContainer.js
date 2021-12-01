import styles from './PageContainer.module.scss';

const PageContainer = ({ top, body }) => {
  return (
    <>
      <div className={`${styles.top}`}>{top}</div>
      <div className={`${styles.body} ${styles.container}`}>{body}</div>
    </>
  );
};

export default PageContainer;
