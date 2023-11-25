import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { routerConfig } from 'src/configs/routerConfig'
import { client } from 'src/graphql/client'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={routerConfig} />
    </ApolloProvider>
  </StrictMode>
)
