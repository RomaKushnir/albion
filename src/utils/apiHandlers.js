export const responseHandler = (res) => {
  return new Promise((resolve, reject) => {
    res
      .json()
      .then((json) => {
        return {
          status: res.status,
          statusText: res.statusText,
          body: json,
        };
      })
      .then(({ status, statusText, body }) => {
        if (statusText === 'OK' && status === 200) {
          resolve(body);
        } else {
          reject(body);
        }
      });
  });
};
