import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import { BrowserRouter } from 'react-router-dom';

import IntlProvider from './intl';
import ReactQueryProvider from './react-query';

const Providers: React.FC = ({ children }) => (
  <ReactQueryProvider>
    <IntlProvider>
      <ConfigProvider locale={enUS}>
        <BrowserRouter>{children}</BrowserRouter>
      </ConfigProvider>
    </IntlProvider>
  </ReactQueryProvider>
);

export default Providers;
