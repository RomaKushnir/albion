import { makeAutoObservable, runInAction } from 'mobx';
import { getWeapon } from 'api';

class Weapon {
  constructor() {
    makeAutoObservable(this);
  }

  playerWeapon = [];

  fetchWeapon() {
    getWeapon().then((data) => runInAction(() => (this.playerWeapon = data)));
  }

  get isWeaponLoaded() {
    return !!this.playerWeapon.length;
  }
}

export default Weapon;
