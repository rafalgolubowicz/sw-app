/* eslint-disable jest/no-conditional-expect */
import { renderHook } from '@testing-library/react-hooks';

import { useFight } from './index';

const items = [10, 20];
const itemsComparator = (m1: number, m2: number) => m2 - m1;

describe('useFight hook', () => {
  it('should set score properly', () => {
    const { result } = renderHook(() =>
      useFight<number>({
        comparator: itemsComparator,
        data: items,
      }),
    );

    const { score, units, currentFightWinner } = result.current;

    const [m1, m2] = units as [number, number];

    if (m1 > m2) {
      expect(score).toStrictEqual([1, 0]);
      expect(currentFightWinner).toBe(-1);
    } else if (m1 < m2) {
      expect(score).toStrictEqual([0, 1]);
      expect(currentFightWinner).toBe(1);
    } else {
      expect(score).toStrictEqual([0, 0]);
      expect(currentFightWinner).toBe(0);
    }
  });
});
