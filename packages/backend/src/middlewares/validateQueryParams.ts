import { StatusCodes } from 'http-status-codes';
import { Next, ParameterizedContext } from 'koa';
import { AnySchema, ValidationError } from 'yup';

const validateQueryParams =
  (schema: AnySchema) => async (ctx: ParameterizedContext, next: Next) => {
    try {
      await schema.validate(ctx.request.query || {}, {
        abortEarly: false,
      });

      return next();
    } catch (err) {
      const message = {
        code: 400,
        message: 'Invalid query params',
        errors: err.inner.map((error: ValidationError) => ({
          path: error.path,
          message: error.message,
          type: error.type,
        })),
      };

      ctx.status = StatusCodes.BAD_REQUEST;
      ctx.body = message;
    }
  };

export default validateQueryParams;
