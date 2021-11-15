import { createContext, useContext } from 'react';
import AllPlayers from './allPlayers';
import Weapon from './weapon';

class RootStore {
  constructor() {
    this.allPlayers = new AllPlayers();
    this.weapon = new Weapon();
  }
}

export const StoreContext = createContext(new RootStore());

export const useStore = () => useContext(StoreContext);

export default RootStore;
