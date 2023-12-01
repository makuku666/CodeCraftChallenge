import { Box, Button, Text } from '@chakra-ui/react'
import { NAV_LOGIN } from 'src/constants/routeNames.const'

import LinkAction from 'components/LinkAction/LinkAction'

/**
 * A component that displays user information and handles login/logout actions.
 * @param {Object} props - The props for the UserInfoDisplay component.
 * @param {string|null} props.user - The username to be displayed. Null if not logged in.
 * @param {Function} props.logout - The function to handle user logout.
 * @returns {JSX.Element} JSX element for displaying user information or login link.
 */
const UserInfoDisplay = ({ user, logout }) => {
  return (
    <Box mx="2">
      {user ? (
        <Box textAlign="center" display="flex">
          <Text fontSize="medium" fontWeight="bold" m="2">
            Welcome, {user}!
          </Text>
          <Button onClick={logout}>Logout</Button>
        </Box>
      ) : (
        <LinkAction to={NAV_LOGIN} label="login" />
      )}
    </Box>
  )
}

export default UserInfoDisplay
