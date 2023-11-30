import { Outlet } from 'react-router-dom'
import { Box, VStack } from '@chakra-ui/react'

import Navbar from 'components/Navbar/Navbar'

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
