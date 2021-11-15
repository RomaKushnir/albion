import styles from './FiltersInfo.module.scss';
import { useStore } from 'store';

const FiltersInfo = () => {
  const store = useStore();

  return (
    <h2 className={styles.subTitle}>
      <span>Best</span>&nbsp;
      <span
        className={styles.clickable}
        onClick={() => store.filtersInfo.setWeaponOpen()}
      >
        {'bow'}
      </span>
      &nbsp;
      <span>players within</span>&nbsp;
      <span
        className={styles.clickable}
        onClick={() => store.filtersInfo.setRangeOpen()}
      >
        {'this week'}
      </span>
      &nbsp;
      <span>by total kill fame</span>
    </h2>
  );
};

export default FiltersInfo;
