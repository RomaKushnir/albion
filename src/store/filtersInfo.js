import { action, makeAutoObservable, observable } from 'mobx';

class FiltersInfo {
  constructor() {
    makeAutoObservable(this, {
      selectState: observable,
      setSelectValue: action,
      setSelectOpen: action,
    });
  }

  selectState = {
    weapon: {
      value: '',
      open: false,
      timestamp: null,
    },
    range: {
      value: '',
      open: false,
      timestamp: null,
    },
  };

  setSelectValue(select, value) {
    this.selectState[select].value = value;
  }

  setSelectOpen(select, state) {
    this.selectState[select].open = state;

    this.selectState[select].timestamp = new Date().getTime();
  }
}

export default FiltersInfo;
