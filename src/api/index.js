import { responseHandler } from '../utils/apiHandlers';

export const getPlayers = async ({
  size = 10,
  offset = 0,
  range = 'lastMonth',
  weapon = 'bow',
}) => {
  return await fetch(
    `/api/gameinfo/events/playerweaponfame?limit=${size}&offset=${offset}&range=${range}&weaponCategory=${weapon}`
  ).then(responseHandler);
};

export const getWeapon = async () => {
  return await fetch('/api/gameinfo/items/_weaponCategories').then(
    responseHandler
  );
};

export const getPlayer = async (id) => {
  return await fetch(`/api/gameinfo/players/${id}`).then(responseHandler);
};
