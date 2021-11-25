import { responseHandler } from '../utils/apiHandlers';

export const getPlayers = ({
  size = 10,
  offset = 0,
  range = 'lastMonth',
  weapon = 'bow',
}) => {
  return fetch(
    `/api/gameinfo/events/playerweaponfame?limit=${size}&offset=${offset}&range=${range}&weaponCategory=${weapon}`
  ).then(responseHandler);
};

export const getWeapon = () => {
  return fetch('/api/gameinfo/items/_weaponCategories/1').then(responseHandler);
};
