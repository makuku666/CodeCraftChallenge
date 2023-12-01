import { useEffect, useMemo, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { Grid } from '@chakra-ui/react'
import { ERR_CODE_UNAUTH } from 'src/constants/error.const'
import { NAV_LOGIN } from 'src/constants/routeNames.const'
import { GQL_CONTENT } from 'src/graphql/queries/content'
import { getHeader } from 'src/utils/login.util'

import ContentTile from 'components/ContentTile/ContentTile'

const ContentPage = () => {
  const [fetchContent, { data: lazyData, error }] = useLazyQuery(
    GQL_CONTENT,
    getHeader()
  )
  const navigate = useNavigate()
  const [listItems, setListItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [nodes, setNodes] = useState(6)

  useEffect(() => {
    const statusCode = error?.networkError?.statusCode
    if (statusCode === ERR_CODE_UNAUTH) {
      navigate(NAV_LOGIN)
    }
  }, [error, navigate])

  useEffect(() => {
    fetchContent({ variables: { first: nodes } })
  }, [])

  const fetchCb = () => {
    setTimeout(() => fetchContent({ variables: { first: nodes } }), 500)
  }

  useEffect(() => {
    const tempData = lazyData?.Admin?.Tree?.GetContentNodes?.edges
    if (!lazyData || !tempData) return

    setListItems(tempData)
    setNodes((prev) => prev + 4)
    if (tempData.length > 0) {
      setHasMore(true)
    }
    setHasMore(false)
  }, [lazyData])

  const contentList = useMemo(() => {
    return listItems.map((content) => {
      const {
        structureDefinition: { title },
        id
      } = content.node

      return <ContentTile key={id} id={id} title={title} />
    })
  }, [listItems])

  return (
    <InfiniteScroll
      dataLength={listItems.length}
      next={fetchCb}
      hasMore={hasMore}
    >
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
    </InfiniteScroll>
  )
}

export default ContentPage
