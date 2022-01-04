import { useMemo } from 'react';
import styles from './FiltersInfo.module.scss';
import { useStore } from 'store';
import { timeRangeOptions } from 'mockedData';

const FiltersInfo = () => {
  const store = useStore();

  const clickStateHandler = (e, select) => {
    //disable click when it is done on text so only select blur event to be performed
    new Date().getTime() - store.filtersInfo.selectState[select].timestamp < 200
      ? e.preventDefault()
      : store.filtersInfo.setSelectOpen(
          select,
          !store.filtersInfo.selectState[select].open
        );
  };

  const weaponName = useMemo(() => {
    if (
      store.weapon.filtersWeapon.length > 0 &&
      store.filtersInfo.selectState.weapon.value
    ) {
      return store.weapon.filtersWeapon.filter(
        (el) => el.id === store.filtersInfo.selectState.weapon.value
      )[0].name;
    }
  }, [store.weapon.filtersWeapon, store.filtersInfo.selectState.weapon.value]);

  const rangeName = useMemo(() => {
    if (store.filtersInfo.selectState.range.value) {
      return timeRangeOptions.filter(
        (el) => el.id === store.filtersInfo.selectState.range.value
      )[0].name;
    }
  }, [store.filtersInfo.selectState.range.value]);

  return (
    <h2 className={styles.subTitle}>
      <span>Best</span>&nbsp;
      <span
        className={styles.clickable}
        onClick={(e) => clickStateHandler(e, 'weapon')}
      >
        {weaponName}
      </span>
      &nbsp;
      <span>players within</span>&nbsp;
      <span
        className={styles.clickable}
        onClick={(e) => clickStateHandler(e, 'range')}
      >
        {rangeName}
      </span>
      &nbsp;
      <span>by total kill fame</span>
    </h2>
  );
};

export default FiltersInfo;
