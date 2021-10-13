import styles from './Home.module.scss';
import PageWrapper from 'components/PageWrapper';
import FiltersInfo from './components/FiltersInfo';
import Select from 'components/Select';
import ReloadButton from './components/ReloadButton';

const Main = () => {
  return (
    <PageWrapper>
      <header className={styles.container}>
        <h1>ALBION ONLINE LEADERBOARDS</h1>
        <FiltersInfo />
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
