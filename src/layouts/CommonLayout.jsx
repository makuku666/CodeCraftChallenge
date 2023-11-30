import { Outlet } from 'react-router-dom'

import Navbar from 'components/Navbar/Navbar'

const CommonLayout = () => {
  console.log('CommonLayout')
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  )
}

export default CommonLayout
