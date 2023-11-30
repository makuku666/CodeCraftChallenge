import { Box, Button, Text } from '@chakra-ui/react'
import { NAV_LOGIN } from 'src/constants/routeNames.const'

import LinkAction from 'components/LinkAction/LinkAction'

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
