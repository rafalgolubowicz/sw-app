import './setup/config';

import Koa from 'koa';
import cors from '@koa/cors';

import { CORS_ORIGIN, PORT } from './setup/environment';
import normalizePort from './utils/normalizePort';

const app = new Koa();
app.use(cors({ origin: CORS_ORIGIN }));

const port = normalizePort(PORT);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
