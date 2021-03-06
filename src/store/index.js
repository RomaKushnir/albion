import { createContext, useContext } from 'react';
import AllPlayers from './allPlayers';
import Weapon from './weapon';
import FiltersInfo from './filtersInfo';
import Error from './error';
import Player from './player';

class RootStore {
  constructor() {
    this.error = new Error();
    this.allPlayers = new AllPlayers(this);
    this.player = new Player(this);
    this.weapon = new Weapon(this);
    this.filtersInfo = new FiltersInfo();
  }
}

export const StoreContext = createContext(new RootStore());

export const useStore = () => useContext(StoreContext);

export default RootStore;
