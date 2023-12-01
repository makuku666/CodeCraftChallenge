import { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import UserInfo from 'src/components/Navbar/UserInfo/UserInfo'
import { NAV_CONTENT, NAV_HOME } from 'src/constants/routeNames.const'
import { AuthContext } from 'src/contexts/authContext'

import LinkAction from 'components/LinkAction/LinkAction'

const Navbar = () => {
  const [{ login }] = useContext(AuthContext)

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
        {login && <LinkAction to={NAV_CONTENT} label="Personal" />}
      </Box>
      <UserInfo />
    </Box>
  )
}

export default Navbar
