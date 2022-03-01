import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { FightMode } from './const';
import { ROUTES } from '../../routes/const';

const useModeSelection = () => {
  const navigate = useNavigate();

  const onSelectMode = useCallback(
    (mode: FightMode) => {
      switch (mode) {
        case FightMode.PEOPLE:
          return navigate(ROUTES.People);
        case FightMode.STARSHIPS:
          return navigate(ROUTES.Starships);
      }
    },
    [navigate],
  );

  return { onSelectMode };
};

export { useModeSelection };
