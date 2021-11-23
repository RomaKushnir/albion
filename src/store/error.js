import { action, makeObservable, observable } from 'mobx';

class Error {
  constructor() {
    makeObservable(this, {
      requestError: observable.ref,
      setRequestError: action,
      resetRequestError: action,
    });
  }

  requestError = [];

  setRequestError(err) {
    this.requestError = [...this.requestError, err];
  }

  resetRequestError() {
    this.requestError = [];
  }
}

export default Error;
