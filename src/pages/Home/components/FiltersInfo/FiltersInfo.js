import styles from './FiltersInfo.module.scss';
import { useStore } from 'store';

const FiltersInfo = () => {
  const store = useStore();

  const clickStateHandler = (select) => {
    store.filtersInfo.prevStateOpen[select]
      ? store.filtersInfo.setSelectOpen(select, undefined)
      : store.filtersInfo.setSelectOpen(
          select,
          !store.filtersInfo.isSelectOpen[select]
        );
  };

  return (
    <h2 className={styles.subTitle}>
      <span>Best</span>&nbsp;
      <span
        className={styles.clickable}
        onClick={() => clickStateHandler('weapon')}
      >
        {store.filtersInfo.selectValue.weapon}
      </span>
      &nbsp;
      <span>players within</span>&nbsp;
      <span
        className={styles.clickable}
        onClick={() => clickStateHandler('range')}
      >
        {store.filtersInfo.selectValue.range}
      </span>
      &nbsp;
      <span>by total kill fame</span>
    </h2>
  );
};

export default FiltersInfo;
