import { add, sub } from './index';

describe('四則演算', () => {
  describe('add', () => {
    test('add: 1 + 2 = 3', () => {
      expect(add(1, 2)).toBe(3);
    })
  })
  describe('sub', () => {
    test('sub: 3 - 1 = 2', () => {
      expect(sub(1, 1)).toBe(2);
    })
  })

});