import styles from './Home.module.scss';
import PageWrapper from 'components/PageWrapper';
import ReloadButton from './components/ReloadButton';
import Select from 'components/Select';

const Main = () => {
  return (
    <PageWrapper>
      <header className={styles.container}>
        <h1>ALBION ONLINE LEADERBOARDS</h1>
        <h2>
          <span>Best</span>&nbsp;
          <span className={styles.clickable}>{'bow'}</span>&nbsp;
          <span>players within</span>&nbsp;
          <span className={styles.clickable}>{'this week'}</span>&nbsp;
          <span>by total kill fame</span>
        </h2>
      </header>
      <div className={`${styles.content} ${styles.container}`}>
        <section className={styles.actionBlock}>
          <div className={styles.selectsWrapper}>
            <Select label="Weapon Group" />
            <Select label="Time Range" />
          </div>
          <ReloadButton />
        </section>
      </div>
    </PageWrapper>
  );
};

export default Main;
