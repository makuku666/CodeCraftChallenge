import { useCallback, useEffect, useMemo, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { Grid } from '@chakra-ui/react'
import update from 'immutability-helper'
import ContentTile from 'pages/ContentPage/components/ContentTile/ContentTile'
import { ERR_CODE_UNAUTH } from 'src/constants/error.const'
import { NAV_LOGIN } from 'src/constants/routeNames.const'
import { GQL_CONTENT } from 'src/graphql/queries/content'
import { getHeader } from 'src/utils/login.util'

/**
 * ContentPage Component
 *
 * This component represents a page displaying a list of content tiles with draggable functionality.
 * It uses Infinite Scroll to load more content and supports dragging tiles using React DnD.
 */
const ContentPage = () => {
  const [fetchContent, { data: lazyData, error }] = useLazyQuery(
    GQL_CONTENT,
    getHeader()
  )
  const navigate = useNavigate()
  const [listItems, setListItems] = useState([])
  const [nodes, setNodes] = useState(6)

  // Redirect to login if unauthorized
  useEffect(() => {
    const statusCode = error?.networkError?.statusCode
    if (statusCode === ERR_CODE_UNAUTH) {
      navigate(NAV_LOGIN)
    }
  }, [error, navigate])

  // Fetch initial content
  useEffect(() => {
    fetchContent({ variables: { first: nodes } })
  }, [])

  // Callback to fetch more content after a delay
  const fetchCb = () => {
    setTimeout(() => fetchContent({ variables: { first: nodes } }), 500)
  }

  // Update listItems when lazyData changes
  useEffect(() => {
    const tempData = lazyData?.Admin?.Tree?.GetContentNodes?.edges
    if (!lazyData || !tempData) return

    setListItems(tempData)
    setNodes((prev) => prev + 4)
  }, [lazyData])

  // Function to handle tile movement
  const moveTile = useCallback((dragIndex, hoverIndex) => {
    setListItems((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]]
        ]
      })
    )
  }, [])

  // Memoized content list to avoid unnecessary re-renders
  const contentList = useMemo(() => {
    return listItems.map((content, idx) => {
      const {
        structureDefinition: { title },
        id
      } = content.node

      return (
        <ContentTile
          key={id}
          id={id}
          index={idx}
          title={title}
          moveTile={moveTile}
        />
      )
    })
  }, [listItems, moveTile])

  return (
    <DndProvider backend={HTML5Backend}>
      <InfiniteScroll dataLength={listItems.length} next={fetchCb} hasMore>
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
    </DndProvider>
  )
}

export default ContentPage
