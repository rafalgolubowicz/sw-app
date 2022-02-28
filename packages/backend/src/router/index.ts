import KoaRouter from '@koa/router';

import peopleRouter from './peopleRouter';

const router = new KoaRouter();

router.use(peopleRouter.routes());

export default router;
