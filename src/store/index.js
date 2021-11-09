import { createContext, useContext } from 'react';
import allPlayers from './allPlayers';

class RootStore {
  constructor() {
    this.allPlayers = new allPlayers();
  }
}

export const StoreContext = createContext(new RootStore());

export const useStore = () => useContext(StoreContext);

export default RootStore;
