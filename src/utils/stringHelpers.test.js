import { toCamelCase } from './stringHelpers';

describe('properly convert string to camelCase', () => {
  let text;

  beforeEach(() => {
    text = toCamelCase('good job');
  });

  it('should be a string', () => {
    expect(typeof text).toBe('string');
  });

  it('should return converted string to camelCase convention', () => {
    expect(text).toBe('goodJob');
  });
});
