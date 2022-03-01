import { TestIds } from './const';
import ModeSelectionPage from './index';
import { ROUTES } from '../../routes/const';
import { render, screen } from '../../test-utils';

describe('mode selection page', () => {
  it('should redirect to people fight page', () => {
    render(<ModeSelectionPage />);
    const peopleFightCard = screen.getByTestId(TestIds.People);

    peopleFightCard.click();

    expect(window.location.pathname).toBe(ROUTES.People);
  });

  it('should redirect to starships fight page', () => {
    render(<ModeSelectionPage />);
    const peopleFightCard = screen.getByTestId(TestIds.Starships);

    peopleFightCard.click();

    expect(window.location.pathname).toBe(ROUTES.Starships);
  });
});
