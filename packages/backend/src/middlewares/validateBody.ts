import { StatusCodes } from 'http-status-codes';
import { Next } from 'koa';
import { KoaContext } from 'src/types';
import { AnySchema, ValidationError } from 'yup';

const validateBody =
  (schema: AnySchema) => async (ctx: KoaContext<any>, next: Next) => {
    try {
      await schema.validate(ctx.request.body, { abortEarly: false });

      return next();
    } catch (err) {
      const message = {
        code: 400,
        message: 'Invalid data',
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

export default validateBody;
