import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client=new ApolloClient({
  uri:'https://khoros-graphql-api.vercel.app/api/graphql',
  cache:new InMemoryCache(),
} 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)
