import { Link } from 'react-router-dom'
import { NAV_HOME } from 'src/constants/routeNames.const'

import UserInfo from 'components/UserInfo/UserInfo'

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: 'lightgrey',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Link to={NAV_HOME}>Home</Link>
      <UserInfo />
    </div>
  )
}

export default Navbar
