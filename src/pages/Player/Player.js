import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useStore } from 'store';
import { observer } from 'mobx-react-lite';
import Spinner from 'components/Spinner';
import Error from 'components/Error';

const Player = observer(() => {
  const params = useParams();
  const store = useStore();

  const player = store.player.playerInfo;

  useEffect(() => {
    store.player.getPlayerInfo(params.playerId);
  }, [store.player, params.playerId]);

  return (
    <>
      {store.error.isApiError ? (
        <Error />
      ) : (
        <>
          {store.player.isPlayerInfoLoaded ? <p>{player.Name}</p> : <Spinner />}
        </>
      )}
    </>
  );
});

export default Player;
