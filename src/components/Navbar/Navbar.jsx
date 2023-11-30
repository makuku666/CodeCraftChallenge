import { Box } from '@chakra-ui/react'
import UserInfo from 'src/components/Navbar/UserInfo/UserInfo'
import { NAV_CONTENT, NAV_HOME } from 'src/constants/routeNames.const'
import { isAuthenticationValid } from 'src/utils/login.util'

import LinkAction from 'components/LinkAction/LinkAction'

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'lightgrey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <LinkAction to={NAV_HOME} label="Home" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          flexWrap: 'noWrap'
        }}
      >
        {isAuthenticationValid() && (
          <LinkAction to={NAV_CONTENT} label="Personal" />
        )}
      </Box>
      <UserInfo />
    </Box>
  )
}

export default Navbar
