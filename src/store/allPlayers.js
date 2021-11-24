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

    return getPlayers(params)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          this.setPlayers(data);
        } else {
          throw new Error(`${res.status} ${res.statusText}`);
        }
      })
      .catch((err) => {
        this.errorStore.setRequestError(err);
        console.error(err);
      });
  }

  setPlayers(data) {
    this.players = data;
    this.isPlayersLoading = false;
  }
}

export default AllPlayers;
