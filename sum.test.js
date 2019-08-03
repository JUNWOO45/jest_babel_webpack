import { sumFunc } from './sum';

describe('sumFunc', () => {
  it('calculates 1 + 2', () => {
    expect(sumFunc(1, 2)).toBe(3);
  });
});
