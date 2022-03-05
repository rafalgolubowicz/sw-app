import PeoplePage from './index';
import { TestIds } from './const';
import { useFight } from '../../hooks/useFight';
import { render, screen } from '../../tests/utils';
import { useGetPeople } from '../../api/people/people';

jest.mock('../../hooks/useFight');
jest.mock('../../api/people/people');

const people = [
  {
    id: 1,
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    birthYear: '19BBY',
    eyeColor: 'blue',
    gender: 'male',
    hairColor: 'blond',
    skinColor: 'fair',
  },
  {
    id: 2,
    name: 'C-3PO',
    height: 167,
    mass: 75,
    birthYear: '112BBY',
    eyeColor: 'yellow',
    skinColor: 'gold',
  },
];

describe('people fight page', () => {
  describe('should fight', () => {
    beforeEach(() => {
      (useGetPeople as jest.Mock).mockReturnValue({
        isLoading: false,
        data: people,
      });
    });

    it('should player 1 win', () => {
      (useFight as jest.Mock).mockReturnValue({
        units: [people[0], people[1]],
        score: [1, 0],
        currentFightWinner: -1,
        fight: jest.fn(),
      });

      render(<PeoplePage />);

      const fightResult = screen.getByTestId(TestIds.FightResult);

      expect(fightResult.textContent).toEqual('Player 1 wins');
    });

    it('should player 2 win', () => {
      (useFight as jest.Mock).mockReturnValue({
        units: [people[1], people[0]],
        score: [0, 1],
        currentFightWinner: 1,
        fight: jest.fn(),
      });

      render(<PeoplePage />);

      const fightResult = screen.getByTestId(TestIds.FightResult);

      expect(fightResult.textContent).toEqual('Player 2 wins');
    });

    it('should draw', () => {
      (useFight as jest.Mock).mockReturnValue({
        units: [people[0], people[0]],
        score: [0, 0],
        currentFightWinner: 0,
        fight: jest.fn(),
      });

      render(<PeoplePage />);

      const fightResult = screen.getByTestId(TestIds.FightResult);

      expect(fightResult.textContent).toEqual('Draw');
    });
  });
});
