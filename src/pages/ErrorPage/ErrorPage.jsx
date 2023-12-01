import { useRouteError } from 'react-router-dom'
import { Center, Heading, Text } from '@chakra-ui/react'
import LinkAction from 'src/components/LinkAction/LinkAction'
import { NAV_HOME } from 'src/constants/routeNames.const'

/**
 * Component to display an error page when a route is not found (404 error).
 * @returns {JSX.Element} JSX element for the error page.
 */
const ErrorPage = () => {
  const error = useRouteError()

  return (
    <Center h="100vh" flexDirection="column" textAlign="center">
      <Heading as="h1" fontSize="4xl" mb="4" color="red.500">
        404 - Page Not Found
      </Heading>
      <Text fontSize="xl">
        {error.statustext ||
          error.message ||
          'The requested page does not exist.'}
      </Text>
      <LinkAction to={NAV_HOME} label="Home" />
    </Center>
  )
}

export default ErrorPage
