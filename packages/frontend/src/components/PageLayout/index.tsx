import { Layout } from 'antd';

import Header from '../Header';

const PageLayout: React.FC = ({ children }) => (
  <Layout className="site-layout">
    <Header />
    <Layout.Content className="site-layout-content">{children}</Layout.Content>
  </Layout>
);

export default PageLayout;
