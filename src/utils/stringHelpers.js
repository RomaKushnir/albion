export const toSpaceDivededText = (str) => {
  return str.replace(/[A-Z]/g, (char) => ` ${char.toLowerCase()}`);
};

export const toCamelCase = (str) => {
  return str.replace(/(\w+) (\w+)/g, (...match) => {
    return match[1] + match[2].charAt(0).toUpperCase() + match[2].slice(1);
  });
};
