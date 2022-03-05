import { Typography } from 'antd';
import { FormattedMessage } from 'react-intl';

import { Person } from '../../api/model';
import { personDataRows } from './const';
import { PlayerStateProps } from './types';
import UnitCard from '../../components/UnitCard';

const PlayerState = ({
  isWinner,
  data,
  score,
  playerNumber,
}: PlayerStateProps) => (
  <div>
    <Typography.Title style={{ marginBottom: 0 }}>
      <FormattedMessage
        id="misc.playerNo"
        defaultMessage="Player {no}"
        values={{ no: playerNumber }}
      />
    </Typography.Title>
    <Typography.Text>
      <FormattedMessage id="misc.score" defaultMessage="Score" />: {score}
    </Typography.Text>
    <UnitCard<Person>
      {...{ data }}
      rows={personDataRows}
      titleKey="name"
      highlighted={isWinner}
    />
  </div>
);

export default PlayerState;
