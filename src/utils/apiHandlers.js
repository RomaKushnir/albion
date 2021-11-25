export const responseHandler = async (res) => {
  console.log('res', res);
  return await res
    .json()
    .then((json) => {
      return {
        ok: res.ok,
        status: res.status,
        body: json,
      };
    })
    .then(({ ok, status, body }) => {
      console.log('res data', ok, status, body);
      return new Promise((resolve, reject) => {
        if (ok && status === 200) {
          resolve(body);
        } else {
          reject(body);
        }
      });
    });
};
