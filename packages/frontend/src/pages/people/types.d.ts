import { Person } from '../../api/model';

export type PlayerStateProps = {
  data: Person;
  isWinner?: boolean;
  playerNumber: number;
  score?: number;
};
