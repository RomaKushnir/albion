import styles from './FiltersInfo.module.scss';

const FiltersInfo = () => {
  return (
    <h2 className={styles.subTitle}>
      <span>Best</span>&nbsp;
      <span className={styles.clickable}>{'bow'}</span>&nbsp;
      <span>players within</span>&nbsp;
      <span className={styles.clickable}>{'this week'}</span>&nbsp;
      <span>by total kill fame</span>
    </h2>
  );
};

export default FiltersInfo;
