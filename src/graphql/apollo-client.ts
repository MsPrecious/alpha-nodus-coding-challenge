// src/graphql/apollo-client.ts

import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://graph.dev.jit.care/graphql', // Replace with your GraphQL API URL
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization:
        'Bearer eyJraWQiOiIzZ1U3bz1f1FFy8kd9Uq07m22ZYUAg7jN5XJ9HABEyuALzAOsOKIK418g9', // Replace with your Access Token
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
