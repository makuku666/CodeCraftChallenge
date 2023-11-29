import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div>ErrorPage</div>
      <div>{error.statustext || error.message}</div>
    </>
  )
}

export default ErrorPage
