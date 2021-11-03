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

export const getPlayers = ({
  size = 10,
  offset = 0,
  range = 'lastMonth',
  weapon = 'bow',
}) => {
  return fetchApi(
    `gameinfo/events/playerweaponfame?limit=${size}&offset=${offset}&range=${range}&weaponCategory=${weapon}`
  ).then((res) => res.json());
};
