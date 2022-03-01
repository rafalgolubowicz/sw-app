module.exports = {
  sw: {
    output: {
      mode: 'tags-split',
      target: 'src/api/sw.ts',
      schemas: 'src/api/model',
      client: 'react-query',
      prettier: true,
      override: {
        mutator: {
          path: './src/setup/axios.ts',
          name: 'instance',
        },
      },
    },
    input: {
      target: '../backend/src/__swagger.json',
    },
  },
};
