import { toCamelCase } from './stringHelpers';

describe('properly convert string to camelCase', () => {
  const text = toCamelCase('good job');

  it('should return converted string to camelCase convention', () => {
    expect(text).toBe('goodJob');
  });
});
