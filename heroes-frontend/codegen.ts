
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/**/*.ts",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
      config: {
        avoidOptionals: true
      }
    },
  }
};

export default config;
