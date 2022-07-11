import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl5glbl54415f01t0bgsr9b8v/master',
  cache: new InMemoryCache()
}) 