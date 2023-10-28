// apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://graph.dev.jit.care/graphql',
  headers: {
    Authorization:
      'Bearer eyJraWQiOiIzZ1U3bz1uQ0oxMjA4MnVyQldKblFpMk5kRlB3U21oRGJOY3M5TktrQ0Y3M2VBU0Y0XC9hVz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5NDRlMTM1ZC0xO8O...', // Your long token
  },
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
