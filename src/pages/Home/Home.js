import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { getPlayers } from 'api';
import PageWrapper from 'components/PageWrapper';
import FiltersInfo from './components/FiltersInfo';
import Select from 'components/Select';
import ReloadButton from './components/ReloadButton';
import ListItem from './components/ListItem';

const Main = () => {
  const [players, setPlayers] = useState([]);

  const pageOffset = 0;

  useEffect(() => {
    getPlayers(pageOffset).then((data) => setPlayers(data));
  }, []);

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
        <section className={styles.listBlock}>
          <h3>Leaderboard</h3>
          {!!players.length &&
            players.map((player, i) => (
              <ListItem
                key={pageOffset + i + 1}
                player={player}
                position={pageOffset + i + 1}
              />
            ))}
        </section>
      </div>
    </PageWrapper>
  );
};

export default Main;
