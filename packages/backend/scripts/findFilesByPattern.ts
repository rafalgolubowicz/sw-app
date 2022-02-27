import { glob } from 'glob';

const findFilesByPattern = (pattern: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    glob(pattern, { absolute: true }, (err, files) => {
      if (err) reject(err);

      resolve(files);
    });
  });
};

export default findFilesByPattern;
