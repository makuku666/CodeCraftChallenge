import { ApolloProvider } from '@apollo/client'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { client } from './graphql/client'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
)
