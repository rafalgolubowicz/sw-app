import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import { BrowserRouter } from 'react-router-dom';

import IntlProvider from './intl';

const Providers: React.FC = ({ children }) => (
  <IntlProvider>
    <ConfigProvider locale={enUS}>
      <BrowserRouter>{children}</BrowserRouter>
    </ConfigProvider>
  </IntlProvider>
);

export default Providers;
