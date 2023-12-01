import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import Navbar from 'components/Navbar/Navbar'

/**
 * A common layout component including a navigation bar and rendering nested routes.
 * @returns {JSX.Element} JSX element for the common layout.
 */
const CommonLayout = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default CommonLayout
