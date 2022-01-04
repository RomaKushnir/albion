import { makeObservable, observable, action } from 'mobx';
import { getPlayers } from '../api';
import { timeRangeOptions } from 'mockedData';

class AllPlayers {
  constructor(rootStore) {
    this.errorStore = rootStore.error;

    makeObservable(this, {
      players: observable,
      isPlayersLoading: observable,
      fetchPlayers: action,
      setPlayers: action,
      playersRequestParams: observable,
      setPlayersRequestParams: action,
    });
  }

  players = [];
  isPlayersLoading = false;

  playersRequestParams = {
    page: 1,
    offset: 0,
    size: 10,
    weapon: 'bow',
    range: timeRangeOptions[3].id,
  };

  async fetchPlayers(params = {}) {
    this.isPlayersLoading = true;

    return await getPlayers(params)
      .then((data) => this.setPlayers(data))
      .catch((err) => {
        this.errorStore.setRequestError(err);
        console.error('Request error: ', err.code, err.message);
      });
  }

  setPlayers(data) {
    this.players = data;
    this.isPlayersLoading = false;
  }

  setPlayersRequestParams(data) {
    this.playersRequestParams = data;
  }
}

export default AllPlayers;
