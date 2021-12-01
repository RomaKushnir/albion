import styles from './PageContainer.module.scss';

const PageContainer = ({ top, body }) => {
  return (
    <>
      <header className={`${styles.top}`}>{top}</header>
      <main className={`${styles.body} ${styles.container}`}>{body}</main>
    </>
  );
};

export default PageContainer;
