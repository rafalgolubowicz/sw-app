import * as yup from 'yup';

const GetPeopleQueryParamsSchema = yup.object().shape({
  take: yup.number(),
  skip: yup.number(),
});

export { GetPeopleQueryParamsSchema };
