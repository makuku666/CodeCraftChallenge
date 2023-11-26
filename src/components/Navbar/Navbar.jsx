import { Link } from 'react-router-dom'

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
      <Link to="/">Home</Link>
      <UserInfo />
    </div>
  )
}

export default Navbar
