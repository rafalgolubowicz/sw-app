import { useCallback, useEffect, useState } from 'react';

import { UseFightOptions } from './types';
import getRandomNumber from '../../utils/getRandomNumber';

const useFight = <T>({ data, comparator }: UseFightOptions<T>) => {
  const [score, setScore] = useState<[number, number]>([0, 0]);
  const [units, setUnits] = useState<[T, T]>();
  const [currentFightWinner, setCurrentFightWinner] = useState(0);

  const pickItem = useCallback(() => {
    const index = getRandomNumber(0, data.length);

    return data[index];
  }, [data]);

  const fight = useCallback(() => {
    const [unit1, unit2] = [pickItem(), pickItem()];
    const winner = comparator(unit1, unit2);

    setUnits([unit1, unit2]);
    setCurrentFightWinner(winner);
    setScore(([score1, score2]) => [
      score1 + Number(winner < 0),
      score2 + Number(winner > 0),
    ]);
  }, [comparator, pickItem]);

  useEffect(() => {
    if (!!data.length) {
      fight();
    }
  }, [data.length, fight]);

  return { score, units, currentFightWinner, fight };
};

export { useFight };
