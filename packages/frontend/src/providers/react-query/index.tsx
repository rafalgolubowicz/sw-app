import { QueryClientProvider } from 'react-query';

import client from './client';

const ReactQueryProvider: React.FC = ({ children }) => (
  <QueryClientProvider {...{ client }}>{children}</QueryClientProvider>
);

export default ReactQueryProvider;
