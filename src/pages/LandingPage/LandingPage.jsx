import { Link } from 'react-router-dom'
import { NAV_CONTENT } from 'src/constants/routeNames.const'
import { isAuthenticationValid } from 'src/utils/login.util'

function LandingPage() {
  return (
    <>
      {isAuthenticationValid() && <Link to={NAV_CONTENT}>Personal</Link>}
      <h1>Welcome</h1>
      <h2>This is page is about rendering content from a graphql server</h2>
      <h2>Login and explore the incredible stuff</h2>
    </>
  )
}

export default LandingPage
