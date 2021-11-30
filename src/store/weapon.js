import { makeAutoObservable } from 'mobx';
import { getWeapon } from 'api';

class Weapon {
  constructor(rootStore) {
    this.errorStore = rootStore.error;

    makeAutoObservable(this);
  }

  filtersWeapon = [];

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
    this.filtersWeapon = data;
  }

  get isWeaponLoaded() {
    return !!this.filtersWeapon.length;
  }
}

export default Weapon;
