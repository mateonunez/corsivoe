import { corsivoe } from '../src/corsivoe';

describe('Cörsivœ', () => {
  it('should return cörsivœ', () => {
    const corsivo = 'corsivo';

    expect(corsivoe(corsivo)).toBe('cörsivœ');
  });
});
