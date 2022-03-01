import 'antd/dist/antd.css';
import './index.scss';

import Routes from './routes';
import Providers from './providers';

const App = () => (
  <Providers>
    <Routes />
  </Providers>
);

export default App;
