export const responseHandler = async (res) => {
  return await new Promise((resolve, reject) => {
    if (res.status === 400 || res.status === 502 || res.status === 503) {
      reject({ code: res.status, message: res.statusText });
    } else {
      res
        .json()
        .then((data) => ({
          isOk: res.ok,
          body: data,
        }))
        .then(({ isOk, body }) => {
          if (isOk) {
            resolve(body);
          } else {
            reject(body);
          }
        });
    }
  });
};
