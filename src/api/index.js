export const getPlayers = ({
  size = 10,
  offset = 0,
  range = 'lastMonth',
  weapon = 'bow',
}) => {
  return fetch(
    `/api/gameinfo/events/playerweaponfame?limit=${size}&offset=${offset}&range=${range}&weaponCategory=${weapon}`
  ).then((res) => res.json());
};
