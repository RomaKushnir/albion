import { makeAutoObservable } from 'mobx';

class FiltersInfo {
  constructor() {
    makeAutoObservable(this);
  }

  isSelectOpen = {
    weapon: undefined,
    range: undefined,
  };

  prevStateOpen = {
    weapon: undefined,
    range: undefined,
  };

  setSelectOpen(handler, select, state) {
    if (handler === 'antState') {
      this.isSelectOpen[select] = state;
    }

    if (handler === 'click') {
      this.isSelectOpen[select] =
        this.prevStateOpen[select] === false
          ? undefined
          : !this.isSelectOpen[select];
    }

    this.prevStateOpen[select] = state;
  }
}

export default FiltersInfo;
