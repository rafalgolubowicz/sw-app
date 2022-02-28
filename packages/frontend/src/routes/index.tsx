import { Layout } from 'antd';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from './const';
import Header from '../components/Header';

const Routes = () => (
  <Layout className="site-layout">
    <Header />
    <Layout.Content className="site-layout-background">
      <RouterRoutes>
        <Route path={ROUTES.Home} element={<p>test</p>} />
        <Route path="*" element={<Navigate to={ROUTES.Home} />} />
      </RouterRoutes>
    </Layout.Content>
  </Layout>
);

export default Routes;
