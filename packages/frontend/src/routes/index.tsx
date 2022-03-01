import { Layout } from 'antd';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from './const';
import Header from '../components/Header';
import HomePage from '../pages/home';

const Routes = () => (
  <Layout className="site-layout">
    <Header />
    <Layout.Content className="site-layout-background">
      <RouterRoutes>
        <Route path={ROUTES.Home} element={<HomePage />} />
        <Route path="*" element={<Navigate to={ROUTES.Home} />} />
      </RouterRoutes>
    </Layout.Content>
  </Layout>
);

export default Routes;
