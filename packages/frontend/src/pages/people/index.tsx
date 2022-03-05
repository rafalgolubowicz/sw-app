import { useCallback } from 'react';
import { Button, Typography } from 'antd';
import { FormattedMessage } from 'react-intl';

import { TestIds } from './const';
import PlayerState from './PlayerState';
import { Person } from '../../api/model';
import Loader from '../../components/Loader';
import { useFight } from '../../hooks/useFight';
import { useGetPeople } from '../../api/people/people';

const PeopleFightPage = () => {
  const { data, isLoading } = useGetPeople();
  const comparator = useCallback(
    (unit1: Person, unit2: Person): number => unit2.mass - unit1.mass,
    [],
  );

  const { units, score, currentFightWinner, fight } = useFight<Person>({
    data: data?.items || [],
    comparator,
  });

  if (isLoading || !units) {
    return <Loader />;
  }

  const [leftPlayerUnit, rightPlayerUnit] = units;
  const [leftPlayerScore, rightPlayerScore] = score;

  return (
    <div className="h-100 flex center column">
      <div className="fight-container mb-1">
        <PlayerState
          data={leftPlayerUnit}
          playerNumber={1}
          isWinner={currentFightWinner < 0}
          score={leftPlayerScore}
        />
        <Typography.Title>vs</Typography.Title>
        <PlayerState
          data={rightPlayerUnit}
          playerNumber={2}
          isWinner={currentFightWinner > 0}
          score={rightPlayerScore}
        />
      </div>
      <Button style={{ margin: '20px 0' }} onClick={fight}>
        <FormattedMessage id="fights.nextFight" defaultMessage="Next fight!" />
      </Button>
      <Typography.Title
        data-testid={TestIds.FightResult}
        style={{ textTransform: 'uppercase' }}
      >
        {currentFightWinner === 0 ? (
          <FormattedMessage id="misc.draw" defaultMessage="Draw" />
        ) : (
          <FormattedMessage
            id="misc.playerNoWins"
            defaultMessage="Player {no} wins"
            values={{ no: currentFightWinner < 0 ? 1 : 2 }}
          />
        )}
      </Typography.Title>
    </div>
  );
};

export default PeopleFightPage;
