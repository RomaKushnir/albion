import fetchDefaults from 'fetch-defaults';

const fetchApi = fetchDefaults(
  fetch,
  'https://cors-anywhere.herokuapp.com/https://gameinfo.albiononline.com/api/',
  {
    headers: {
      // mode: 'no-cors',
      // referrerPolicy: 'no-referrer',
      // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
  }
);

export const getPlayers = (offset) => {
  return fetchApi(
    `gameinfo/events/playerweaponfame?limit=10&offset=${offset}&range=lastMonth&weaponCategory=bow`
  ).then((res) => res.json());
};
