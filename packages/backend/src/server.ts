import './setup/config';

import router from './router';
import { PORT } from './setup/environment';
import createServer from './utils/createServer';
import normalizePort from './utils/normalizePort';
import createSwagger from './utils/createSwagger';

const app = createServer();
const swagger = createSwagger();

app.use(router.routes());
app.use(swagger);

const port = normalizePort(PORT);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
