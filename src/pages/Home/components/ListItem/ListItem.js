import styles from './ListItem.module.scss';

const ListItem = ({ player, position }) => {
  const playerNicknames = (
    <>
      <span>{player.AllianceName ? `[${player.AllianceName}] ` : ''}</span>
      <span>{player.GuildName}</span>
    </>
  );

  return (
    <article className={styles.itemWrap}>
      <div className={styles.playerPosition}>{position}</div>
      <div className={styles.playerCreds}>
        <p>{player.PlayerName}</p>
        <p>{player.AllianceName || player.GuildName ? playerNicknames : '-'}</p>
      </div>
      <div className={styles.fameBlock}>{player.Fame}</div>
    </article>
  );
};

export default ListItem;
