import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { getPlayers } from 'api';
import PageWrapper from 'components/PageWrapper';
import FiltersInfo from './components/FiltersInfo';
import Select from 'components/Select';
import ReloadButton from './components/ReloadButton';
import ListItem from './components/ListItem';
import Pagination from 'components/Pagination';

const defaultRequestValues = { page: 1, offset: 0, size: 10 };
const totalItems = 100;

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const setData = ({ page, size, offset }) => {
    getPlayers({ offset, size }).then((data) => {
      setPlayers(data);
      setCurrentPage(page);
      setPageSize(size);
      setPageOffset(offset);
    });
  };

  useEffect(() => {
    setData(defaultRequestValues);
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
        <section className={styles.paginationBlock}>
          <Pagination onPageChange={setData} total={totalItems} />
          <div>
            <p>{`Page ${currentPage}`}</p>
            <p>
              {`Showing ${pageOffset + 1}-${pageOffset + pageSize}
              out of ${totalItems}`}
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Main;
