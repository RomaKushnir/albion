import styles from './ListItem.module.scss';
import { useNavigate } from 'react-router';

const ListItem = ({ player, position }) => {
  const navigate = useNavigate();

  const playerNicknames = (
    <>
      <span>{player.AllianceName ? `[${player.AllianceName}] ` : ''}</span>
      <span>{player.GuildName}</span>
    </>
  );

  return (
    <article
      className={styles.itemWrap}
      onClick={() => navigate(`/player/${player.PlayerId}`)}
    >
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
