import { koaSwagger } from 'koa2-swagger-ui';

const createSwagger = () =>
  koaSwagger({
    routePrefix: '/__swagger',
    swaggerOptions: {
      spec: require('../__swagger.json'),
    },
  });

export default createSwagger;
