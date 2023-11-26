import React, { useState } from 'react'

const UserInfo = () => {
  const [currentUser, setCurrentUser] = useState(null)

  // Simulating login function
  const login = () => {
    setCurrentUser('JohnDoe') // Set the current user upon login
  }

  // Simulating logout function
  const logout = () => {
    setCurrentUser(null) // Clear the current user upon logout
  }
  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser}!</p>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>
            Please <a href="/login">login</a> to continue.
          </p>
        </div>
      )}
    </div>
  )
}

export default UserInfo
