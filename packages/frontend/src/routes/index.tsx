import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

import {
  ModeSelectionPage,
  PeopleFightPage,
  StarshipsFightPage,
} from '../pages';
import { ROUTES } from './const';
import PageLayout from '../components/PageLayout';

const Routes = () => (
  <PageLayout>
    <RouterRoutes>
      <Route path={ROUTES.Home} element={<ModeSelectionPage />} />
      <Route path={ROUTES.People} element={<PeopleFightPage />} />
      <Route path={ROUTES.Starships} element={<StarshipsFightPage />} />
      <Route path="*" element={<Navigate to={ROUTES.Home} />} />
    </RouterRoutes>
  </PageLayout>
);

export default Routes;
