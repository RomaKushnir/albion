export const responseHandler = async (res) => {
  return await new Promise((resolve, reject) => {
    if (res.ok) {
      res.json().then((data) => resolve(data));
    } else {
      reject(`${res.status} ${res.statusText}`);
    }
  });
};
