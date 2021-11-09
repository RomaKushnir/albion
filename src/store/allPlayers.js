import { makeAutoObservable } from 'mobx';
import { getPlayers } from '../api';

class allPlayers {
  constructor() {
    makeAutoObservable(this);
  }

  players = [];

  fetchPlayers(params = {}) {
    return getPlayers(params).then((data) => {
      this.setPlayers(data);
    });
  }

  setPlayers(data) {
    this.players = data;
  }
}

export default allPlayers;
