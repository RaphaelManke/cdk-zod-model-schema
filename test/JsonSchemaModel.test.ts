import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import { z } from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';
import { JsonSchemaModel } from '../src';

describe('JsonSchemadModel', () => {
  it('should synth', () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    const api = new RestApi(stack, 'test-api');
    api.root.addMethod('GET');

    const zodModel = z.object({
      foo: z.string(),
    });

    const jsonSchema = zodToJsonSchema(zodModel, 'test-model');

    new JsonSchemaModel(stack, 'test-model', {
      restApiId: api.restApiId,
      jsonSchema,
      modelName: 'test-model',
    });

    const template = Template.fromStack(stack);
    const cloudformationModelRessource = template.findResources(
      'AWS::ApiGateway::Model'
    );
    expect(cloudformationModelRessource).toMatchSnapshot();
  });
});
