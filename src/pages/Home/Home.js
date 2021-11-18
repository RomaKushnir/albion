import { useEffect, useState, useMemo, useCallback } from 'react';
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
const timeRangeOptions = [
  { id: 'week', name: 'week' },
  { id: 'month', name: 'month' },
  { id: 'lastWeek', name: 'lastWeek' },
  { id: 'lastMonth', name: 'lastMonth' },
];

const Main = observer(() => {
  const store = useStore();

  const [requestParams, setRequstParams] = useState({
    currentPage: 1,
    pageOffset: 0,
    pageSize: 10,
    weaponCategory: 'Bow',
    timeRange: 'lastMonth',
  });

  const { currentPage, pageOffset, pageSize, weaponCategory, timeRange } =
    requestParams;

  const getData = useCallback(
    ({ page = 1, size = 10, offset = 0, weapon, range }) => {
      store.allPlayers
        .fetchPlayers({ offset, size, weapon, range })
        .then(() => {
          setRequstParams({
            ...requestParams,
            currentPage: page,
            pageOffset: offset,
            pageSize: size,
          });
        });
    },
    [store.allPlayers, requestParams]
  );

  const noPlayersLoaded = useMemo(() => {
    return !!store.allPlayers.players.length;
  }, [store.allPlayers.players]);

  const onSelectChange = (value, select) => {
    if (select === 'weapon') {
      setRequstParams({ ...requestParams, weaponCategory: value });
    }
    if (select === 'range') {
      setRequstParams({ ...requestParams, timeRange: value });
    }
  };

  const onDropdownVisibleChange = (openState, select) => {
    store.filtersInfo.setSelectOpen('antState', select, openState);
  };

  const onDataUpdate = () => {
    getData({
      page: 1,
      offset: 0,
      size: pageSize,
      weapon: weaponCategory,
      range: timeRange,
    });
  };

  const onPageChange = ({ page, size, offset }) => {
    getData({
      page: page,
      size: size,
      offset: offset,
      weapon: weaponCategory,
      range: timeRange,
    });
  };

  useEffect(() => {
    store.weapon.fetchWeapon();
    store.allPlayers.fetchPlayers();
  }, [store.allPlayers, store.weapon]);

  return (
    <PageWrapper>
      <header className={styles.container}>
        <h1>ALBION ONLINE LEADERBOARDS</h1>
        <FiltersInfo />
      </header>
      <div className={`${styles.content} ${styles.container}`}>
        <section className={styles.actionBlock}>
          <div className={styles.selectsWrapper}>
            <Select
              label="Weapon Group"
              options={store.weapon.playerWeapon}
              isOpen={store.filtersInfo.isSelectOpen.weapon}
              isLoading={!store.weapon.isWeaponLoaded}
              defaultValue={weaponCategory}
              onSelect={(val) => onSelectChange(val, 'weapon')}
              onDropdownVisibleChange={(v) =>
                onDropdownVisibleChange(v, 'weapon')
              }
            />
            <Select
              label="Time Range"
              options={timeRangeOptions}
              isOpen={store.filtersInfo.isSelectOpen.range}
              defaultValue={timeRange}
              onSelect={(val) => onSelectChange(val, 'range')}
              onDropdownVisibleChange={(v) =>
                onDropdownVisibleChange(v, 'range')
              }
            />
          </div>
          <ReloadButton onDataUpdate={onDataUpdate} />
        </section>
        <section className={styles.listBlock}>
          <h3>Leaderboard</h3>
          <div className={styles.listContainer}>
            {store.allPlayers.isPlayersLoading && <Spinner />}
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
                <Pagination
                  onPageChange={onPageChange}
                  total={totalItems}
                  currentPage={currentPage}
                />
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
