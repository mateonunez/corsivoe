import { corsivoe } from '../src/corsivoe';

describe('Cörsivœ', () => {
  it('should return cörsivœ', () => {
    expect(corsivoe()).toBe('cörsivœ');
  });
});
