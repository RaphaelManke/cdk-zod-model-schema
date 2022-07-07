# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JsonSchemaModel <a name="JsonSchemaModel" id="cdk-zod-model-schema.JsonSchemaModel"></a>

#### Initializers <a name="Initializers" id="cdk-zod-model-schema.JsonSchemaModel.Initializer"></a>

```typescript
import { JsonSchemaModel } from 'cdk-zod-model-schema'

new JsonSchemaModel(scope: Construct, id: string, props: JsonSchemaModelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModel.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModel.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-zod-model-schema.JsonSchemaModelProps">JsonSchemaModelProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-zod-model-schema.JsonSchemaModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-zod-model-schema.JsonSchemaModel.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-zod-model-schema.JsonSchemaModel.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-zod-model-schema.JsonSchemaModelProps">JsonSchemaModelProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModel.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-zod-model-schema.JsonSchemaModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-zod-model-schema.JsonSchemaModel.isConstruct"></a>

```typescript
import { JsonSchemaModel } from 'cdk-zod-model-schema'

JsonSchemaModel.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-zod-model-schema.JsonSchemaModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModel.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-zod-model-schema.JsonSchemaModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="cdk-zod-model-schema.JsonSchemaModel.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### JsonSchemaModelProps <a name="JsonSchemaModelProps" id="cdk-zod-model-schema.JsonSchemaModelProps"></a>

#### Initializer <a name="Initializer" id="cdk-zod-model-schema.JsonSchemaModelProps.Initializer"></a>

```typescript
import { JsonSchemaModelProps } from 'cdk-zod-model-schema'

const jsonSchemaModelProps: JsonSchemaModelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModelProps.property.jsonSchema">jsonSchema</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModelProps.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModelProps.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-zod-model-schema.JsonSchemaModelProps.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `jsonSchema`<sup>Required</sup> <a name="jsonSchema" id="cdk-zod-model-schema.JsonSchemaModelProps.property.jsonSchema"></a>

```typescript
public readonly jsonSchema: any;
```

- *Type:* any

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="cdk-zod-model-schema.JsonSchemaModelProps.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="cdk-zod-model-schema.JsonSchemaModelProps.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-zod-model-schema.JsonSchemaModelProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---



