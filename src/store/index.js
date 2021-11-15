import { createContext, useContext } from 'react';
import AllPlayers from './allPlayers';
import Weapon from './weapon';
import FiltersInfo from './filtersInfo';

class RootStore {
  constructor() {
    this.allPlayers = new AllPlayers();
    this.weapon = new Weapon();
    this.filtersInfo = new FiltersInfo();
  }
}

export const StoreContext = createContext(new RootStore());

export const useStore = () => useContext(StoreContext);

export default RootStore;
