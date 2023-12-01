import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Card, CardBody, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

/**
 * ContentTile Component
 *
 * This component represents a draggable content tile used within a grid layout.
 * It displays a card with title and ID information.
 * Users can drag and drop this tile within a grid.
 *
 * Props:
 * @param {string} title - The title of the content tile.
 * @param {string} id - The unique ID of the content tile.
 * @param {number} index - The index of the tile within the grid.
 * @param {function} moveTile - A function to handle the movement of the card within the grid.
 */

const style = {
  cursor: 'move'
}

const ContentTile = ({ title, id, index, moveTile }) => {
  const ref = useRef(null)

  // Drop functionality
  const [{ handlerId }, drop] = useDrop({
    accept: 'GridItem',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveTile(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })

  // Drag functionality
  const [{ isDragging }, drag] = useDrag({
    type: 'GridItem',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      <GridItem colSpan={1} id={id} index={index}>
        <Card h="100%" minH="35vh">
          <CardBody>
            <Heading
              as="h1"
              textAlign="center"
              fontSize={{ base: '2xl', md: '3xl' }}
              mb="3rem"
            >
              {title}
            </Heading>
            <Grid templateColumns="repeat(12, 1fr)">
              <GridItem colSpan={3}>
                <Heading
                  as="h4"
                  textAlign="center"
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  Id:
                </Heading>
              </GridItem>
              <GridItem display="flex" colSpan={9} alignItems="center">
                <Text wordBreak="break-all">{id}</Text>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </GridItem>
    </div>
  )
}

export default ContentTile
