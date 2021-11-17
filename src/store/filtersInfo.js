import { makeAutoObservable } from 'mobx';

class FiltersInfo {
  constructor() {
    makeAutoObservable(this);
  }

  isWeaponSelectOpen = false;
  isRangeSelectOpen = false;

  setWeaponOpen(state) {
    this.isWeaponSelectOpen =
      state === 'setToDefault'
        ? undefined
        : state !== undefined
        ? state
        : !this.isWeaponSelectOpen;
  }

  setRangeOpen(state) {
    this.isRangeSelectOpen =
      state === 'setToDefault'
        ? undefined
        : state !== undefined
        ? state
        : !this.isRangeSelectOpen;
  }
}

export default FiltersInfo;
