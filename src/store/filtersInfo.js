import { action, makeAutoObservable, observable } from 'mobx';

class FiltersInfo {
  constructor() {
    makeAutoObservable(this, {
      selectValue: observable,
      isSelectOpen: observable,
      setSelectValue: action,
      setSelectOpen: action,
    });
  }

  selectValue = {
    weapon: '',
    range: '',
  };

  isSelectOpen = {
    weapon: undefined,
    range: undefined,
  };

  prevStateOpen = {
    weapon: undefined,
    range: undefined,
  };

  setSelectValue(select, value) {
    this.selectValue[select] = value;
  }

  setSelectOpen(select, state) {
    this.prevStateOpen[select] = this.isSelectOpen[select];

    this.isSelectOpen[select] = state;
  }
}

export default FiltersInfo;
