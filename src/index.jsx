import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)