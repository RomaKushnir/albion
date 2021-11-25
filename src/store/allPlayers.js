import { makeObservable, observable, action } from 'mobx';
import { getPlayers } from '../api';

class AllPlayers {
  constructor(rootStore) {
    this.errorStore = rootStore.error;

    makeObservable(this, {
      players: observable,
      isPlayersLoading: observable,
      fetchPlayers: action,
      setPlayers: action,
    });
  }

  players = [];
  isPlayersLoading = false;

  async fetchPlayers(params = {}) {
    this.isPlayersLoading = true;

    return await getPlayers(params)
      .then((data) => this.setPlayers(data))
      .catch((err) => {
        this.errorStore.setRequestError(err);
        console.error('Error: ', err.code, err.message);
      });
  }

  setPlayers(data) {
    this.players = data;
    this.isPlayersLoading = false;
  }
}

export default AllPlayers;
