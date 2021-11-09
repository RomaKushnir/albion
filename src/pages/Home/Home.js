import { useEffect, useState, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import styles from './Home.module.scss';
import PageWrapper from 'components/PageWrapper';
import FiltersInfo from './components/FiltersInfo';
import Select from 'components/Select';
import ReloadButton from './components/ReloadButton';
import ListItem from './components/ListItem';
import Pagination from 'components/Pagination';
import Spinner from 'components/Spinner';

const totalItems = 100;

const Main = observer(() => {
  const store = useStore();

  const [pageOffset, setPageOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isPlayersLoading, setIsPlayersLoading] = useState(false);

  const getData = ({ page, size, offset }) => {
    setIsPlayersLoading(true);
    store.allPlayers.fetchPlayers({ offset, size }).then(() => {
      setIsPlayersLoading(false);
      setCurrentPage(page);
      setPageSize(size);
      setPageOffset(offset);
    });
  };

  const noPlayersLoaded = useMemo(() => {
    return !!store.allPlayers.players.length;
  }, [store.allPlayers.players]);

  useEffect(() => {
    store.allPlayers.fetchPlayers();
  }, [store.allPlayers]);

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
          <div className={styles.listContainer}>
            {isPlayersLoading && <Spinner />}
            {noPlayersLoaded &&
              store.allPlayers.players.map((player, i) => (
                <ListItem
                  key={pageOffset + i + 1}
                  player={player}
                  position={pageOffset + i + 1}
                />
              ))}
            {noPlayersLoaded && (
              <div className={styles.paginationBlock}>
                <Pagination onPageChange={getData} total={totalItems} />
                <div>
                  <p>{`Page ${currentPage}`}</p>
                  <p>
                    {`Showing ${pageOffset + 1}-${pageOffset + pageSize}
                      out of ${totalItems}`}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
});

export default Main;
