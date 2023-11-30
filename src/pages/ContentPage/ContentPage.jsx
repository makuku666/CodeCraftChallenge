import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { nanoid } from 'nanoid'
import { ERR_CODE_UNAUTH } from 'src/constants/error.const'
import { NAV_LOGIN } from 'src/constants/routeNames.const'
import { GQL_CONTENT } from 'src/graphql/queries/content'
import { getHeader } from 'src/utils/login.util'

const ContentPage = () => {
  const { data, error } = useQuery(GQL_CONTENT, getHeader())
  const navigate = useNavigate()

  useEffect(() => {
    const statusCode = error?.networkError?.statusCode

    if (statusCode === ERR_CODE_UNAUTH) {
      navigate(NAV_LOGIN)
    }
  }, [error])

  const contentList = useMemo(() => {
    const temp = data?.Admin?.Tree?.GetContentNodes?.edges
    if (!data || !temp) return []

    return temp.map((content) => {
      const { title } = content.node.structureDefinition

      return (
        <div key={nanoid()}>
          <h3>{title}</h3>
        </div>
      )
    })
  }, [data])

  return contentList
}

export default ContentPage
