const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Raphael Manke',
  authorAddress: 'raphaz110@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-zod-model-schema',
  repositoryUrl: 'https://github.com/RaphaelManke/cdk-zod-model-schema.git',

  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
    },
  },

  /* Runtime dependencies of this module. */
  //deps: ['zod', 'zod-to-json-schema'],
  devDeps: ['zod', 'zod-to-json-schema'],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // bundledDeps: ['zod', 'zod-to-json-schema'],
});
project.synth();
