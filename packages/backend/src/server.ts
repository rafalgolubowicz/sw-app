import './setup/config';

import router from './router';
import { PORT } from './setup/environment';
import createServer from './utils/createServer';
import normalizePort from './utils/normalizePort';

const app = createServer();

app.use(router.routes());

const port = normalizePort(PORT);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
