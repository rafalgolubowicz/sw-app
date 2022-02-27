import fs from 'fs';
import path from 'path';

import findFilesByPattern from './findFilesByPattern';

const pattern = '**/*.swagger.json';
const swaggerDefinitionPath = path.resolve(__dirname, '../src/__swagger.json');

const defaultSwaggerDefinition = {
  swagger: '2.0',
  info: {
    description: 'This is partial implementation of Star Wars API',
    version: '1.0.0',
    title: 'Swagger SW API',
    termsOfService: 'http://swagger.io/terms/',
    contact: { email: 'golubowicz.rafal@gmail.com' },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  schemes: ['http'],
  tags: [],
  paths: {},
  definitions: {},
};

const prepareSwaggerDefinition = async () => {
  const files = await findFilesByPattern(pattern);
  const definition = { ...defaultSwaggerDefinition };

  for await (const file of files) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const partialDefinition = require(file);

    definition.tags = { ...definition.tags, ...partialDefinition.tags };
    definition.paths = { ...definition.paths, ...partialDefinition.paths };
    definition.definitions = {
      ...definition.definitions,
      ...partialDefinition.definitions,
    };
  }

  fs.writeFileSync(swaggerDefinitionPath, JSON.stringify(definition, null, 2));
};

prepareSwaggerDefinition();
