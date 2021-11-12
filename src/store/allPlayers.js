import { makeAutoObservable } from 'mobx';
import { getPlayers } from '../api';

class allPlayers {
  constructor() {
    makeAutoObservable(this);
  }

  players = [];
  isPlayersLoading = false;

  fetchPlayers(params = {}) {
    this.isPlayersLoading = true;
    return getPlayers(params).then((data) => {
      this.setPlayers(data);
    });
  }

  setPlayers(data) {
    this.players = data;
    this.isPlayersLoading = false;
  }
}

export default allPlayers;
