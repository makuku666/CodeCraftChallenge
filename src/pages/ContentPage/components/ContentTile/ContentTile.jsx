import { Card, CardBody, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

const ContentTile = ({ title, id }) => {
  return (
    <GridItem colSpan={1}>
      <Card h="100%" minH="30vh">
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
              <Text>{id}</Text>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </GridItem>
  )
}

export default ContentTile
