import * as yup from 'yup';

const GetPeopleQueryParamsSchema = yup.object().shape({
  take: yup.number(),
  skip: yup.number(),
});

const AddPersonBodySchema = yup.object().shape({
  name: yup.string().required(),
  height: yup.number().required().min(1),
  mass: yup.number().required().min(0),
  hairColor: yup.string(),
  skinColor: yup.string(),
  eyeColor: yup.string(),
  birthYear: yup.string(),
  gender: yup.string(),
});

const PatchPersonBodySchema = yup.object().shape({
  name: yup.string(),
  height: yup.number().min(1),
  mass: yup.number().min(0),
  hairColor: yup.string(),
  skinColor: yup.string(),
  eyeColor: yup.string(),
  birthYear: yup.string(),
  gender: yup.string(),
});

export {
  GetPeopleQueryParamsSchema,
  AddPersonBodySchema,
  PatchPersonBodySchema,
};
