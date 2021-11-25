export const responseHandler = (res) => {
  return new Promise((resolve, reject) => {
    res
      .json()
      .then((json) => {
        return {
          ok: res.ok,
          status: res.status,
          body: json,
        };
      })
      .then(({ ok, status, body }) => {
        if (ok && status === 200) {
          resolve(body);
        } else {
          reject(body);
        }
      });
  });
};
