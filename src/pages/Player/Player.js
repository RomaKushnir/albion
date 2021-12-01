import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useStore } from 'store';
import { observer } from 'mobx-react-lite';
import appRoutes from 'routes';
import PageContainer from 'components/PageContainer';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import LinkButton from 'components/LinkButton';
import styles from './Player.module.scss';

const Player = observer(() => {
  const params = useParams();
  const store = useStore();

  const player = store.player.playerInfo;

  const onPageReload = () => {
    store.player.getPlayerInfo(params.playerId);
  };

  useEffect(() => {
    store.player.getPlayerInfo(params.playerId);
    return () => {
      store.player.clearPlayerInfo();
    };
  }, [store.player, params.playerId]);

  return (
    <>
      {store.error.isApiError ? (
        <Error errorHandler={onPageReload} />
      ) : (
        <>
          {store.player.isPlayerInfoLoaded ? (
            <PageContainer
              top={
                <section className={styles.topSection}>
                  <div className={styles.titleWrap}>
                    <h2>{player.Name}</h2>
                    <h3>
                      <span>
                        {player.AllianceName ? `[${player.AllianceName}]` : ''}
                      </span>
                      <span>{player.GuildName}</span>
                    </h3>
                  </div>
                  <LinkButton text="Go Home" path={appRoutes.ROOT} />
                </section>
              }
              body={
                <div className={styles.bodyWrapper}>
                  <section className={styles.statsSection}>
                    <article className={styles.statBlock}>
                      <h4>PVE statistics</h4>
                      <p>
                        <span>Avalon: </span>
                        <span>{player.LifetimeStatistics.PvE.Avalon}</span>
                      </p>
                      <p>
                        <span>Corrupted Dungeon: </span>
                        <span>
                          {player.LifetimeStatistics.PvE.CorruptedDungeon}
                        </span>
                      </p>
                      <p>
                        <span>Hellgate: </span>
                        <span>{player.LifetimeStatistics.PvE.Hellgate}</span>
                      </p>
                      <p>
                        <span>Outlands: </span>:
                        <span>{player.LifetimeStatistics.PvE.Outlands}</span>
                      </p>
                      <p>
                        <span>Avalon: </span>
                        <span>{player.LifetimeStatistics.PvE.Royal}</span>
                      </p>
                      <p>
                        <span>Total: </span>
                        <span>{player.LifetimeStatistics.PvE.Total}</span>
                      </p>
                    </article>
                    <article className={styles.statBlock}>
                      <h4>PVP statistics</h4>
                      <p>
                        <span>Kill Fame: </span>
                        <span>{player.KillFame}</span>
                      </p>
                      <p>
                        <span>Death Fame: </span>
                        <span>{player.DeathFame}</span>
                      </p>
                      <p>
                        <span>Fame Ratio: </span>
                        <span>{player.FameRatio}</span>
                      </p>
                    </article>
                    <article
                      className={`${styles.statBlock} ${styles.otherStats}`}
                    >
                      <h4>Other statistics</h4>
                      <p>
                        <span>Crafting: </span>
                        <span>{player.LifetimeStatistics.PvE.Avalon}</span>
                      </p>
                      <p>
                        <span>Crystal League: </span>
                        <span>
                          {player.LifetimeStatistics.PvE.CorruptedDungeon}
                        </span>
                      </p>
                      <p>
                        <span>Farming Fame: </span>
                        <span>{player.LifetimeStatistics.PvE.Hellgate}</span>
                      </p>
                      <p>
                        <span>Fishing Fame: </span>:
                        <span>{player.LifetimeStatistics.PvE.Outlands}</span>
                      </p>
                      <p>
                        <span>Gathering: </span>
                        <span>{player.LifetimeStatistics.PvE.Royal}</span>
                      </p>
                    </article>
                  </section>
                  <section className={styles.linkSection}>
                    <h4>Additional links</h4>
                    <p>
                      <span>AlbionDB: </span>
                      <a
                        href={`https://albiondb.net/player/${player.Name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >{`https://albiondb.net/player/${player.Name}`}</a>
                    </p>
                    <p>
                      <span>Albion Official Killboard: </span>
                      <a
                        href={`https://albiononline.com/en/killboard/player/${player.Id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >{`https://albiondb.net/player/${player.Id}`}</a>
                    </p>
                    <p>
                      <span>MurderLedger: </span>
                      <a
                        href={`https://murderledger.com/players/${player.Name}/ledger`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >{`https://murderledger.com/players/${player.Name}/ledger`}</a>
                    </p>
                  </section>
                </div>
              }
            />
          ) : (
            <Spinner />
          )}
        </>
      )}
    </>
  );
});

export default Player;
