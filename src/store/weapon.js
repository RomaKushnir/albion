import { makeAutoObservable } from 'mobx';
import { getWeapon } from 'api';

class Weapon {
  constructor(rootStore) {
    this.errorStore = rootStore.error;

    makeAutoObservable(this);
  }

  playerWeapon = [];

  async fetchWeapon() {
    await getWeapon()
      .then((data) => {
        this.setWeapon(data);
      })
      .catch((err) => {
        this.errorStore.setRequestError(err);
        console.error('Request error: ', err.code, err.message);
      });
  }

  setWeapon(data) {
    this.playerWeapon = data;
  }

  get isWeaponLoaded() {
    return !!this.playerWeapon.length;
  }
}

export default Weapon;
