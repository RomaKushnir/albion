import { getPlayer } from 'api';
import { makeObservable, observable, action, computed } from 'mobx';

class Player {
  constructor(rootStore) {
    this.errorStore = rootStore.error;

    makeObservable(this, {
      playerInfo: observable,
      getPlayerInfo: action,
      setPlayerInfo: action,
      clearPlayerInfo: action,
      isPlayerInfoLoaded: computed,
    });
  }

  playerInfo = {};

  async getPlayerInfo(id) {
    await getPlayer(id)
      .then((data) => this.setPlayerInfo(data))
      .catch((err) => {
        this.errorStore.setRequestError(err);
        console.error('Request error: ', err.code, err.message);
      });
  }

  setPlayerInfo(data) {
    this.playerInfo = data;
  }

  clearPlayerInfo() {
    this.playerInfo = {};
  }

  get isPlayerInfoLoaded() {
    return !!Object.keys(this.playerInfo).length;
  }
}

export default Player;
