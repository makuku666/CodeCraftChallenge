import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Grid } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { ERR_CODE_UNAUTH } from 'src/constants/error.const'
import { NAV_LOGIN } from 'src/constants/routeNames.const'
import { GQL_CONTENT } from 'src/graphql/queries/content'
import { getHeader } from 'src/utils/login.util'

import ContentTile from './components/ContentTile/ContentTile'

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
      const id = nanoid()
      return <ContentTile key={id} id={id} title={title} />
    })
  }, [data])

  return (
    <Grid
      bgColor="hotpink"
      templateColumns="repeat(2, 1fr)"
      gap={2}
      p={4}
      h="100%"
      overflowY="auto"
    >
      {contentList}
    </Grid>
  )
}

export default ContentPage
