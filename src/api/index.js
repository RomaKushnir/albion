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
    fetch('/api/gameinfo/items/_weaponCategories').then((res) => {
      if (res.ok) {
        resolve(res.json());
      } else {
        reject(`${res.status} ${res.statusText}`);
      }
    });
  });
};

// const parseJSON = (res) => {
//   return new Promise((resolve) =>
//     res.json().then((json) => {
//       return resolve({
//         isOk: res.ok,
//         body: json,
//       });
//     })
//   );
// };
