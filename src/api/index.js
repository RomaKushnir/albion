export const getPlayers = (offset) => {
  return fetch(
    `api/gameinfo/events/playerweaponfame?limit=10&offset=${offset}&range=lastMonth&weaponCategory=bow`
  ).then((res) => res.json());
};
