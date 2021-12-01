import { action, computed, makeObservable, observable } from 'mobx';

class Error {
  constructor() {
    makeObservable(this, {
      requestError: observable,
      setRequestError: action,
      resetRequestError: action,
      isApiError: computed,
    });
  }

  requestError = [];

  setRequestError(err) {
    this.requestError = [...this.requestError, err];
  }

  resetRequestError() {
    this.requestError = [];
  }

  get isApiError() {
    return !!this.requestError.length;
  }
}

export default Error;
