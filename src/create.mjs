/* Amplify Params - DO NOT EDIT
	API_LAMBDAPOPULATE_GRAPHQLAPIENDPOINTOUTPUT
	API_LAMBDAPOPULATE_GRAPHQLAPIIDOUTPUT
	API_LAMBDAPOPULATE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { API } from "@aws-amplify/api";
import { v4 as uuid4 } from "uuid";

const config = {
  "aws_project_region": "us-east-1",
  "aws_appsync_graphqlEndpoint": "https://w2jznbgejvd5tjoxhfeudefvie.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "AWS_IAM"
};

API.configure(config);

const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const todo = {
    id: uuid4(),
    name: `test-${Date.now()}`,
  };

  try {
    const res = await API.graphql({
      query: createTodo,
      variables: { input: todo },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(res, null, 2),
    };
  } catch (error) {
    console.log(error)
    //throw new Error(JSON.stringify(error, null, 2));
  }
};


const result = handler()
console.log(result)