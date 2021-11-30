import { useEffect, useState, useMemo, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import styles from './Home.module.scss';
import PageWrapper from 'components/PageWrapper';
import FiltersInfo from './components/FiltersInfo';
import Select from 'components/Select';
import ReloadButton from '../../components/ReloadButton';
import ListItem from './components/ListItem';
import Pagination from 'components/Pagination';
import Spinner from 'components/Spinner';
import { toCamelCase } from '../../utils/stringHelpers';

const totalItems = 100;
const timeRangeOptions = [
  { id: 'week', name: 'week' },
  { id: 'month', name: 'month' },
  { id: 'lastWeek', name: 'last week' },
  { id: 'lastMonth', name: 'last month' },
];

const Main = observer(() => {
  const store = useStore();

  const [requestParams, setRequstParams] = useState({
    page: 1,
    offset: 0,
    size: 10,
    weapon: 'Bow',
    range: timeRangeOptions[3].name,
  });

  const { page, offset, size, weapon, range } = requestParams;

  const getData = useCallback(
    ({ page = 1, size = 10, offset = 0, weapon, range }) => {
      range = toCamelCase(range); //transform range for correct request value

      store.allPlayers
        .fetchPlayers({ offset, size, weapon, range })
        .then(() => {
          setRequstParams({
            ...requestParams,
            page,
            offset,
            size,
          });
        });
    },
    [store.allPlayers, requestParams]
  );

  const noPlayersLoaded = useMemo(() => {
    return !!store.allPlayers.players.length;
  }, [store.allPlayers.players]);

  const onSelectChange = (select, value) => {
    setRequstParams({ ...requestParams, [select]: value });

    store.filtersInfo.setSelectValue(select, value);
  };

  const onDropdownVisibleChange = (select, openState) => {
    store.filtersInfo.setSelectOpen(select, openState);
  };

  const onDataUpdate = () => {
    getData({
      page: 1,
      offset: 0,
      size,
      weapon,
      range,
    });
  };

  const onPageChange = ({ page, size, offset }) => {
    getData({
      page,
      size,
      offset,
      weapon,
      range,
    });
  };

  const onPageReload = () => {
    getData(requestParams);
    store.weapon.fetchWeapon();
  };

  useEffect(() => {
    store.filtersInfo.setSelectValue('weapon', weapon);
    store.filtersInfo.setSelectValue('range', range);
  }, [store.filtersInfo, weapon, range]);

  useEffect(() => {
    store.weapon.fetchWeapon();
    store.allPlayers.fetchPlayers();
  }, [store.allPlayers, store.weapon]);

  return (
    <PageWrapper errorHandler={onPageReload}>
      <header className={styles.container}>
        <h1>ALBION ONLINE LEADERBOARDS</h1>
        <FiltersInfo />
      </header>
      <div className={`${styles.content} ${styles.container}`}>
        <section className={styles.actionBlock}>
          <div className={styles.selectsWrapper}>
            <Select
              label="Weapon Group"
              options={store.weapon.filtersWeapon}
              isOpen={store.filtersInfo.selectState.weapon.open}
              isLoading={!store.weapon.isWeaponLoaded}
              defaultValue={weapon}
              onSelect={(val) => onSelectChange('weapon', val)}
              onDropdownVisibleChange={(v) =>
                onDropdownVisibleChange('weapon', v)
              }
            />
            <Select
              label="Time Range"
              options={timeRangeOptions}
              isOpen={store.filtersInfo.selectState.range.open}
              defaultValue={range}
              onSelect={(val) => onSelectChange('range', val)}
              onDropdownVisibleChange={(v) =>
                onDropdownVisibleChange('range', v)
              }
            />
          </div>
          <ReloadButton text={'Update Leaderboard'} onUpdate={onDataUpdate} />
        </section>
        <section className={styles.listBlock}>
          <h3>Leaderboard</h3>
          <div className={styles.listContainer}>
            {store.allPlayers.isPlayersLoading && <Spinner />}
            {noPlayersLoaded &&
              store.allPlayers.players.map((player, i) => (
                <ListItem
                  key={offset + i + 1}
                  player={player}
                  position={offset + i + 1}
                />
              ))}
            {noPlayersLoaded && (
              <div className={styles.paginationBlock}>
                <Pagination
                  onPageChange={onPageChange}
                  total={totalItems}
                  currentPage={page}
                  pageSize={size}
                />
                <div>
                  <p>{`Page ${page}`}</p>
                  <p>
                    {`Showing ${offset + 1}-${offset + size}
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
