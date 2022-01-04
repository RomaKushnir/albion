import { useEffect, useMemo, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import styles from './Home.module.scss';
import PageContainer from 'components/PageContainer';
import Error from 'components/Error';
import FiltersInfo from './components/FiltersInfo';
import Select from 'components/Select';
import ReloadButton from '../../components/ReloadButton';
import ListItem from './components/ListItem';
import Pagination from 'components/Pagination';
import Spinner from 'components/Spinner';
import { timeRangeOptions, totalItems } from 'mockedData';

const totalItems = 100;
const timeRangeOptions = [
  { id: 'week', name: 'week' },
  { id: 'month', name: 'month' },
  { id: 'lastWeek', name: 'last week' },
  { id: 'lastMonth', name: 'last month' },
];

const Main = observer(() => {
  const store = useStore();

  const { page, offset, size, weapon, range } =
    store.allPlayers.playersRequestParams;

  const getData = useCallback(
    ({ page = 1, size = 10, offset = 0, weapon, range }) => {
      store.allPlayers
        .fetchPlayers({ offset, size, weapon, range })
        .then(() => {
          store.allPlayers.setPlayersRequestParams({
            page,
            offset,
            size,
            weapon,
            range,
          });
        });
    },
    [store.allPlayers]
  );

  const noPlayersLoaded = useMemo(() => {
    return !!store.allPlayers.players.length;
  }, [store.allPlayers.players]);

  const onSelectChange = (select, value) => {
    store.allPlayers.setPlayersRequestParams({
      ...store.allPlayers.playersRequestParams,
      [select]: value,
    });

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
    getData(store.allPlayers.playersRequestParams);
    store.weapon.fetchWeapon();
  };

  useEffect(() => {
    getData(store.allPlayers.playersRequestParams);
    store.weapon.fetchWeapon();
  }, [store.allPlayers, store.weapon, getData]);

  useEffect(() => {
    store.filtersInfo.setSelectValue('weapon', weapon);
    store.filtersInfo.setSelectValue('range', range);
  }, [store.filtersInfo, weapon, range]);

  return (
    <>
      {store.error.isApiError ? (
        <Error errorHandler={onPageReload} />
      ) : (
        <>
          <PageContainer
            top={
              <>
                <h1>ALBION ONLINE LEADERBOARDS</h1>
                <FiltersInfo />
              </>
            }
            body={
              <>
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
                  <ReloadButton
                    text={'Update Leaderboard'}
                    onUpdate={onDataUpdate}
                  />
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
              </>
            }
          />
        </>
      )}
    </>
  );
});

export default Main;
