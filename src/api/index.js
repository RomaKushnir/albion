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

export const getWeapon = () => {
  return fetch('/api/gameinfo/items/_weaponCategories').then((res) =>
    res.json()
  );
};
