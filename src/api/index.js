export const getPlayers = ({
  size = 10,
  offset = 0,
  range = 'lastMonth',
  weapon = 'bow',
}) => {
  return fetch(
    `/api/gameinfo/events/playerweaponfame?limit=${size}&offset=${offset}&range=${range}&weaponCategory=${weapon}`
  );
};

export const getWeapon = () => {
  return new Promise((resolve, reject) => {
    fetch('/api/gameinfo/items/_weaponCategories/1')
      .then(parseJSON)
      .then(({ status, statusText, body }) => {
        if (statusText === 'OK' && status === 200) {
          resolve(body);
        } else {
          reject(body);
        }
      });
    //previous solution
    // .then((res) => {
    //   return new Promise((resolve, reject) => {
    //     console.log('request response', res);
    //     if (res.statusText === 'OK' && res.status === 200) {
    //       console.log('weapon resolve', res);
    //       resolve(res.json());
    //     } else {
    //       console.log('weapon reject', res);
    //       reject(`${res.status} ${res.statusText}`);
    //     }
    //   });
    // })
  });
};

const parseJSON = (res) => {
  return new Promise((resolve) =>
    res.json().then((json) => {
      return resolve({
        isOk: res.ok,
        body: json,
      });
    })
  );
};
