import { makeAutoObservable } from 'mobx';

class FiltersInfo {
  constructor() {
    makeAutoObservable(this);
  }

  isWeaponSelectOpen = false;
  isRangeSelectOpen = false;

  setWeaponOpen(resetOpen) {
    this.isWeaponSelectOpen =
      resetOpen === 'resetOpenToDefault' ? undefined : !this.isWeaponSelectOpen;
  }

  setRangeOpen(resetOpen) {
    this.isRangeSelectOpen =
      resetOpen === 'resetOpenToDefault' ? undefined : !this.isRangeSelectOpen;
  }
}

export default FiltersInfo;
