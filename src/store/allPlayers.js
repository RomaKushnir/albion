import { makeAutoObservable } from 'mobx';
import { getPlayers } from '../api';

class AllPlayers {
  constructor(rootStore) {
    this.errorStore = rootStore.error;

    makeAutoObservable(this);
  }

  players = [];
  isPlayersLoading = false;

  fetchPlayers(params = {}) {
    this.isPlayersLoading = true;

    return getPlayers(params)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`${res.status} ${res.statusText}`);
        }
      })
      .then((data) => this.setPlayers(data))
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
