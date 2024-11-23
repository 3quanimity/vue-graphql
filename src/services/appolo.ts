import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
})

// Cache implementation
const cache = new InMemoryCache()

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  // const token = `${import.meta.env.VITE_API_KEY}`;

  operation.setContext({
    headers: {
      // authorization: ``Bearer ${token},
    },
  })
  return forward(operation)
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
})

export default apolloClient
