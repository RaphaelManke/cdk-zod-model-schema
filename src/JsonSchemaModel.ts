import { CfnModel, CfnModelProps, IModel } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export interface JsonSchemaModelProps {
  readonly jsonSchema: any;
  readonly modelName: string;
  // CfnModelProps
  readonly restApiId: string;
  readonly description?: string;
}
export class JsonSchemaModel extends Construct implements IModel {
  public readonly modelId: string;
  constructor(scope: Construct, id: string, props: JsonSchemaModelProps) {
    super(scope, id);
    const { restApiId, description, modelName, jsonSchema } = props;
    const cfnModelProps: CfnModelProps = {
      restApiId,
      contentType: 'application/json',
      description: description,
      name: modelName,
      schema: jsonSchema,
    };

    this.modelId = modelName;
    new CfnModel(this, 'Resource', cfnModelProps);
  }
}
