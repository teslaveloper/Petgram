import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, InMemoryCache, HttpLink, from, ApolloProvider } from '@apollo/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    deleteAndRedirect();
  };
});

const getToken = () => {
  let token = window.sessionStorage.getItem('pgus-tk');
  token = token ? JSON.parse(token) : null
  const auth = token ? {authorization: `Bearer ${token}`} : ''
  return auth
}

const deleteAndRedirect = () => {
  window.sessionStorage.removeItem('pgus-tk');
  window.location.href = '/';
}
const httpLink = new HttpLink({
  uri: 'http://localhost:3500/graphql',
  headers: getToken()
})

const appLink = from([
  errorLink, httpLink
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: appLink,
});

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)
