import styles from './FiltersInfo.module.scss';
import { useStore } from 'store';

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

  return (
    <h2 className={styles.subTitle}>
      <span>Best</span>&nbsp;
      <span
        className={styles.clickable}
        onClick={(e) => clickStateHandler(e, 'weapon')}
      >
        {store.filtersInfo.selectState.weapon.value}
      </span>
      &nbsp;
      <span>players within</span>&nbsp;
      <span
        className={styles.clickable}
        onClick={(e) => clickStateHandler(e, 'range')}
      >
        {store.filtersInfo.selectState.range.value}
      </span>
      &nbsp;
      <span>by total kill fame</span>
    </h2>
  );
};

export default FiltersInfo;
