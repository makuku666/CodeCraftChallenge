import Cookies from 'js-cookie'
import { COM_REFRESH_TOK, COM_SESSION_TOK } from 'src/constants/common.const'
import { RGX_SESSION_TOKEN_VALID } from 'src/constants/regEx.const'

export const cookieOptions = {
  secure: true,
  sameSite: 'strict'
}

export const setToken = (accessToken, refreshToken) => {
  Cookies.set(COM_SESSION_TOK, accessToken, cookieOptions)
  Cookies.set(COM_SESSION_TOK, `Bearer ${accessToken}`, cookieOptions)
  Cookies.set(COM_REFRESH_TOK, `Bearer ${refreshToken}`, cookieOptions)
}

export const removeSessionToken = () => {
  Cookies.remove(COM_SESSION_TOK)
}

export const getHeader = () => {
  const accessToken = Cookies.get(COM_SESSION_TOK)
  return {
    context: {
      headers: {
        Authorization: accessToken || ''
      }
    }
  }
}

export const isAuthenticationValid = () => {
  const token = Cookies.get(COM_SESSION_TOK)
  return RGX_SESSION_TOKEN_VALID.test(token)
}
