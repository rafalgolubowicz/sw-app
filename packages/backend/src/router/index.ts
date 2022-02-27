import KoaRouter from '@koa/router';

import peopleApiRouter from './peopleApiRouter';

const router = new KoaRouter();

router.use(peopleApiRouter.routes());

export default router;
