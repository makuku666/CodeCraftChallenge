import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from 'src/graphql/client'

import { routerConfig } from './routes/route'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={routerConfig} />
    </ApolloProvider>
  </StrictMode>
)
