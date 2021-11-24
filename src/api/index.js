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
    fetch('1/api/gameinfo/items/_weaponCategories')
      .then((res) => {
        return new Promise((resolve) =>
          res.json().then((json) => {
            return resolve({
              isOk: res.ok,
              body: json,
            });
          })
        );
      })
      .then(({ isOk, body }) => {
        if (isOk) {
          resolve(body);
        } else {
          reject(body);
        }
      });
  });
};
